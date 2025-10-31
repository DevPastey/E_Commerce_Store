import { create } from 'zustand';
import toast from 'react-hot-toast';
import axiosInstance from '../lib/axios';
import type { ProductShape } from '../types/types';


type ProductStore = {
  products: ProductShape[],
  loading: boolean,
  createProduct: (productData: ProductShape) => Promise<boolean>,
  errors: Record<string, string>,

}

export const useProductStore = create<ProductStore>()((set) => ({
  products: [],
  loading: false,
  errors: {},

  createProduct: async (productData: ProductShape) => {
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

  fetchAllProduct: async () => {
    set({loading: true});

    try {
      const res = await axiosInstance.get("/products");
      set({products: res.data.products, loading: false});
    } catch (error: any) {
      const message = error.response?.data?.message || "Failed to fetch products";
      toast.error(message, {position: "bottom-center"});
      set({ loading: false, errors: message });
      return false;
    }
  },

  deleteProduct: async (id) => {},
  
  toggleFeaturedProduct: (id) => {},

}))