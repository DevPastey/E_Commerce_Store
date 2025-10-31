import Input from "../components/Input";
import type { ProductShape } from "../types/types";
import { Loader, PlusCircle, Upload } from 'lucide-react';
import Button from "../components/Button";
import { useState } from "react";
import { useUserStore } from "../stores/useUserStore";
import { easeInOut, motion } from "framer-motion";

const categories = ["jean", "t-shirt", "shoe", "glasses", "jacket", "suit", "bag"];

const CreateProductForm = () => {

    const [product, setProduct] = useState<ProductShape>({
        name: "",
        description: "",
        price: 0,
        count: 0,
        imageUrl: "",
        category: "",
    });
    
    const {loading} = useUserStore();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
      
        // Update local state
        const updatedData = { ...product, [name]: value };
        setProduct(updatedData);
      
        // Validate only the changed field
        // const fieldSchema = userSchema.shape[name as keyof typeof updatedData];
        // const fieldResult = fieldSchema.safeParse(value);
      
        // setErrors((prev) => ({
        //   ...prev,
        //   [name]: fieldResult.success ? undefined : fieldResult.error.issues[0].message,
        // }));
      
        // Optionally keep full form validation for submit state tracking
        // setValidationResult(userSchema.safeParse(updatedData));
    };
            
      
      
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
      
        // Validate full form on submit
        // const result = userSchema.safeParse(formData);
        // setValidationResult(result);
      
        // if (!result.success) {
        //   const tree = z.treeifyError(result.error);
        //   setErrors({
        //     name: tree.properties?.name?.errors?.[0],
        //     email: tree.properties?.email?.errors?.[0],
        //     password: tree.properties?.password?.errors?.[0],
        //     confirmPassword: tree.properties?.confirmPassword?.errors?.[0],
        //   });
        //   console.warn("❌ Invalid form submission");
        //   return;
        // }
      
        // Proceed with signup
        // const success = await signup(result.data);
        // console.log("✅ Valid data sent:", validationResult);
      
        // if (success) {
        //   setFormData({
        //     name: "",
        //     email: "",
        //     password: "",
        //     confirmPassword: "",
        //   });
        //   setErrors({});
        // }
    };

  return (
    <motion.div
        initial={{ opacity:0, y:20 }}
        animate={{ opacity:1, y:0 }}
        transition={{ duration: 0.8, delay:0.2, ease:easeInOut}}
        
        className="flex flex-col w-110 mt-6 py-4 px-6 bg-gray-900/80 text-sm"
    >
        <h3 className="text-emerald-200 "> Create New Product</h3>

        <div className="w-full">
        <Input type="text" label="Product Name" name="name" value={product.name} onChange={handleChange} />
        <Input type="note" label="Description" name="description" value={product.name} onChange={handleChange} />
        <Input type="text" label="Price" name="price" value={product.name} onChange={handleChange} />
        <Input type="text" label="Category" name="category" value={product.name} onChange={handleChange} />
        <Input type="text" label="Count in stock" name="count" value={product.name} onChange={handleChange} />

        <div className="flex cursor-pointer bg-gray-700 w-36 rounded py-1 mt-6 justify-center items-center gap-2">
            <Upload size={16} />
            upload image
            <input type="file" accept="image/*" className="w-full hidden"></input>
        </div>
        {/* <Input type="file" accept="image/*" label="" name="" value={product.name} onChange={handleChange} className="w-10" /> */}
        
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
    </motion.div>
  )
}

export default CreateProductForm
