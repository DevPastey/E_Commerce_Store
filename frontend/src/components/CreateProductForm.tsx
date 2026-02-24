import AdminInput from "../components/AdminInput";
import { Loader, PlusCircle, Upload } from 'lucide-react';
import Button from "../components/Button";
import { useState } from "react";
import { easeInOut, motion } from "framer-motion";
import * as z from "zod";
import { useProductStore } from "../stores/useProductStore";
// import { productsDB } from "../constants/productsdb";
import updatedProducts from "../constants/updatedProducts"

const categories = ["jeans", "t-shirt", "shoes", "glasses", "jackets", "suits", "bags"];

export const newProductSchema = z.object({
    name: z.string().min(1, "Name is required"),
    description: z.string().min(2, "Description is required"),
    price: z.union([
      z.number().min(1, "Price must be a positive number"),
    ]),
    countInStock: z.union([
      z.number().min(1, "Count must be a positive number"),
    ]),
    imageUrl: z.string().min(1, "Image upload is required"),
    category: z.string().min(1, "Category is required"),
});

type newProductForm = z.infer<typeof newProductSchema>;

const CreateProductForm = () => {

    const [newProduct, setNewProduct] = useState<newProductForm>({
        name: "",
        description: "",
        price: 0,
        countInStock: 0,
        imageUrl: "",
        category: "",
    });

    const [errors, setErrors] = useState<Partial<Record<keyof newProductForm, string>>>({});
    const [validationResult, setValidationResult] = useState< ReturnType<typeof newProductSchema.safeParse > | null>(null)
    
    const {loading, createProduct} = useProductStore();

    const handlePublicateDB  = async () => {
        const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

        for (const p of updatedProducts) {
          await createProduct(p);
      
          // Wait 5 secs before the next product
          await delay(1000);
        }
      
        console.log("All products published!");
    
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
      
        // Optional: Validate file type and size
        if (!file.type.startsWith("image/")) {
          setErrors((prev) => ({ ...prev, imageUrl: "Please upload a valid image file" }));
          return;
        }
      
        if (file.size > 2 * 1024 * 1024) { // 2MB limit
          setErrors((prev) => ({ ...prev, imageUrl: "File size must be under 2MB" }));
          return;
        }
      
        const reader = new FileReader();
      
        reader.onloadend = () => {
          setNewProduct((prev) => ({
            ...prev,
            imageUrl: reader.result as string, // ✅ matches your schema
          }));
      
          setErrors((prev) => ({ ...prev, imageUrl: undefined })); // clear error
        };
      
        reader.readAsDataURL(file); // converts image → base64 string
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type } = e.target;
        const key = name as keyof newProductForm; // ✅ safely cast to valid key
      
        // Update local state
        const updatedData = { ...newProduct, [key]: 
            type === "number"
            ? value === ""
                ? ""
                : Number(value)
            : value,
         };
        setNewProduct(updatedData);
      
        // Validate only the changed field
        const fieldSchema = newProductSchema.shape[key];
        const fieldResult = fieldSchema.safeParse(updatedData[key]);
      
        setErrors((prev) => ({
          ...prev,
          [name]: fieldResult.success ? undefined : fieldResult.error.issues[0].message,
        }));
      
        // Optionally keep full form validation for submit state tracking
        // setValidationResult(userSchema.safeParse(updatedData));
    };
            
      
      
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
      
        // Validate full form on submit
        const result = newProductSchema.safeParse(newProduct);
        setValidationResult(result);
      
        if (!result.success) {
          const tree = z.treeifyError(result.error);
          setErrors({
            name: tree.properties?.name?.errors?.[0],
            description: tree.properties?.description?.errors?.[0],
            price: tree.properties?.price?.errors?.[0],
            countInStock: tree.properties?.countInStock?.errors?.[0],
            imageUrl: tree.properties?.imageUrl?.errors?.[0],
            category: tree.properties?.category?.errors?.[0],
          });
          console.warn("❌ Invalid form submission");
          return;
        }
      
        // Proceed with creating product
        const success = await createProduct(result.data);
        // console.log(result)
        console.log("✅ Valid data sent:", validationResult);
      
        console.log(newProduct);

        if (success) {
          setNewProduct({
            name: "",
            description: "",
            price: 0,
            countInStock: 0,
            imageUrl: "",
            category: "",
          });
          setErrors({});
        };

        
    };

  return (
    <motion.div
        initial={{ opacity:0, y:20 }}
        animate={{ opacity:1, y:0 }}
        transition={{ duration: 0.8, delay:0.2, ease:easeInOut}}

        className="flex flex-col w-110 mt-6 py-4 px-6 bg-gray-900/80 text-sm rounded-lg"
    >
        <form onSubmit={handleSubmit}
            autoComplete="on" // ✅ enables autofill
            method="POST"
            className="pb-4"
        > 
            <h3 className="text-emerald-200 text-lg"> Create New Product</h3>

            <div className="w-full">
            <AdminInput type="text" label="Product Name" name="name" value={newProduct.name} error={errors.name} onChange={handleChange} />

            <div>
                <label htmlFor='description' className='block text-sm font-medium text-gray-300 mt-4'>
                    Description
                </label>
                <textarea
                    id='description'
                    name='description'
                    value={newProduct.description}
                    onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                    rows={3}
                    className='mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm
                    py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 
                    focus:border-emerald-500'
                
                />

                {errors.description && <p className="text-red-500/90 text-xs mt-1 ">{errors.description}</p>} 
            </div>

            <AdminInput type="number" step="0.01" label="Price" name="price" value={newProduct.price} error={errors.price} onChange={handleChange} />

            <div>
                <label htmlFor='category' className='mt-4 block text-sm font-medium text-gray-300'>
                    Category
                </label>
                <select
                    id='category'
                    name='category'
                    value={newProduct.category}
                    onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                    className='mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md
                        shadow-sm py-2 px-3 text-white focus:outline-none 
                        focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500'
                    
                >
                    <option value=''>Select a category</option>
                    {categories.map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>

                {errors.category && <p className="text-red-500/90 text-xs mt-1 ">{errors.category}</p>} 

            </div>

            <AdminInput type="number" label="Count in stock" name="countInStock" value={newProduct.countInStock} error={errors.countInStock} onChange={handleChange} />

            <div className='mt-4 flex items-center'>
                <input type='file' name="imageUrl" id='image' className='sr-only' accept='image/*' onChange={handleImageChange} />
                <label
                    htmlFor='image'
                    className='cursor-pointer bg-gray-700 py-2 px-3 border border-gray-600 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-300 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500'
                >
                    <Upload className='h-5 w-5 inline-block mr-2' />
                    Upload Image
                </label>
                {newProduct.imageUrl && <span className='ml-3 text-sm text-gray-400'>Image uploaded </span>}

                {errors.imageUrl && <p className="text-red-500/90 text-xs mt-1 ">{errors.imageUrl}</p>} 

            </div>

            <Button disabled={loading} type="submit">
                {loading ? (
                    <> 
                        <Loader className="mr-2 h-5 w-5 animate-spin" aria-hidden="true" /> 
                        Loading...
                    </>
                ): (
                    <>
                        <PlusCircle className="mr-2 h-5 w-5" aria-hidden="true" />
                    Create Product
                    </>
                )}
            </Button>
            </div>
        </form>

        <button onClick={handlePublicateDB} className="hover:cursor-pointer w-full mt-8  flex justify-center items-center py-1 rounded bg-primary-green/60 hover:bg-primary-green/80">
            Publicate DB
        </button>
    </motion.div>
  )
}




export default CreateProductForm;




