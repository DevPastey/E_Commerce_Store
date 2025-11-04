import axiosInstance from "../lib/axios";
import { create } from "zustand";
import { toast } from "react-hot-toast";
import type { ProductShape } from "../types/types";

type CartStore = {
    cart: ProductShape[],
    coupon: string | null,
    total: number,
    subTotal: number,
    loading: boolean,
    errors: Record<string, string>,
    addToCart: (product: ProductShape) => Promise<void>,
    fetchCartItems: () => Promise<void>,
}

export const useCartStore = create<CartStore>()((set, get) => ({
    cart: [],
    coupon: null,
    total: 0,
    subTotal: 0,
    loading: false,
    errors: {},

    fetchCartItems: async () => {
        set({loading: true});

        try {
            const res = await axiosInstance.get("/cart/");
            set({cart: res.data, loading: false});
            console.log(res.data);

        } catch (error: any) {
            const message = error.response?.data?.message || "Failed to fetch products in cart";
            toast.error(message, {position: "bottom-center"});
            set({ cart: [], loading: false, errors: message });
        }
    },


    addToCart: async (product) => {
        set({ loading: true });

        try {
            await axiosInstance.post("/carts", {productId:product._id});
            toast.success("Product added to cart.");

            set((prevState) => {
                const existingItem = prevState.cart.find((item: ProductShape) => item._id === product._id);
                const newCart = existingItem
                ? prevState.cart.map((item) => item._id === product._id ? {...item, quantity: item.quantity + 1} : item)
                : [...prevState.cart, { ...product, quantity: 1}];
                return{ cart: newCart};
            })
      
        } catch (error: any) {
            const message = error.response?.data?.message || "Failed to add products to cart";
            toast.error(message, {position: "bottom-center"});
            set({ loading: false, errors: message });
        }
    },   
    
    
   


}))
