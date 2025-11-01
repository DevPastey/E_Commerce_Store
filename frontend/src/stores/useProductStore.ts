import { create } from 'zustand';
import toast from 'react-hot-toast';
import axiosInstance from '../lib/axios';
import type { ProductShape } from '../types/types';


type ProductStore = {
  products: ProductShape[],
  loading: boolean,
  createProduct: (productData: ProductShape) => Promise<boolean>,
  fetchAllProducts: () => Promise<boolean>,
  toggleFeaturedProduct: (productId: string) => Promise<boolean>,
  deleteProduct: (productId: string) => Promise<boolean>,


  errors: Record<string, string>,

}

export const useProductStore = create<ProductStore>()((set) => ({
  products: [],
  loading: false,
  errors: {},

  createProduct: async (productData) => {
    set({loading: true});
    try {
    const res = await axiosInstance.post("/products", productData);

      // Safely update products array
    set((state) => ({
      products: [...state.products, res.data],
      loading: false,
      error: null,
    }));
      
    toast.success("Product created successfully!", {position: "bottom-center"});
    return true;

    } catch (error: any) {
      const message = error.response?.data?.message || "Failed to create product";
      toast.error(message, {position: "bottom-center"});
      set({ loading: false, errors: message });
      return false;
    }
  },

  fetchAllProducts: async () => {
    set({loading: true});
    
    try {
      const res = await axiosInstance.get("/products");
      set({products: res.data.products, loading: false});
      return true;
    } catch (error: any) {
      const message = error.response?.data?.message || "Failed to fetch products";
      toast.error(message, {position: "bottom-center"});
      set({ loading: false, errors: message });
      return false;
    }
  },

  deleteProduct: async (productId) => {
    set({loading: true});
    try {
      await axiosInstance.delete(`/products/${productId}`);

      set((prevProduct) => ({
        products: prevProduct.products.filter((product) => product._id !== productId),
      }));
      return true;
    } catch (error:any) {
      const message = error.response?.data?.message || "Could not delete product";
      toast.error(message, {position: "bottom-center"});
      set({ loading: false, errors: message });
      return false;
    }
  },
  
  toggleFeaturedProduct: async(productId) => {
    set({loading: true});
    try {
      const  res = await axiosInstance.patch(`/products/${productId}`);

      // this will update the isFeaturred prop of the product
      set((prevProducts) => ({
        products: prevProducts.products.map((product) => 
          product._id === productId 
            ? { ...product, isFeatured: res.data.isFeatured } 
            : product
        )
      }));

      return true;
    } catch (error:any) {
      const message = error.response?.data?.message || "Could not update product";
      toast.error(message, {position: "bottom-center"});
      set({ loading: false, errors: message });
      return false;

    }
  },

}))