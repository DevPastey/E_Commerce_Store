import axiosInstance from "../lib/axios";
import { create } from "zustand";
import { toast } from "react-hot-toast";
import type { CouponShape, ItemProps, ProductShape } from "../types/types";


type CartStore = {
  cart: ItemProps[];
  coupon: CouponShape | null;
  isCouponApplied: boolean;
  total: number;
  subtotal: number;
  loading: boolean;
  errors: string | Record<string, string>;
  getMyCoupon: () => Promise<void>;
  applyCoupon: ( code: string) => Promise<void>;
  removeCoupon: () => void;

  addToCart: (product: ProductShape) => Promise<void>;
  fetchCartItems: () => Promise<void>;
  clearCart: () => Promise<void>;
  removeFromCart: (productId: string) => Promise<void>;
  updateQuantity: (productId: string, quantity: number) => Promise<void>;

  calculateTotals: () => void;
};

export const useCartStore = create<CartStore>()((set, get) => ({
  cart: [],
  coupon: null,
  total: 0,
  subtotal: 0,
  loading: false,
  isCouponApplied: false,
  errors: {},

    getMyCoupon: async () => {
        try {
            const res = await axiosInstance.get("/coupon");
            set({ coupon: res.data });
        } catch (error) {
            console.error("Error fetching coupon:", error);
        }
    },

    applyCoupon: async ( code ) => {
        try {
            const res = await axiosInstance.post("/coupon/validate", { code });
            set({ coupon: res.data, isCouponApplied: true });
            
            get().calculateTotals();
            toast.success("Coupon applied successfully", {position: "top-right"}); 
        } catch (error: any) {
            toast.error(error.response?.data?.message || "Failed to apply coupon", {position: "bottom-center"});
        }
        
    },

    removeCoupon: () => {
        set({ coupon: null, isCouponApplied: false });
        get().calculateTotals();
        toast.success("Coupon-removed", {position: "bottom-right"});
    },



    fetchCartItems: async () => {
        set({ loading: true });
        try {
        const res = await axiosInstance.get("/cart");
        // Expect backend to return array of products with quantity
        set({ cart: res.data, loading: false });
        get().calculateTotals();
        } catch (error: any) {
        const message =
            error.response?.data?.message || "Failed to fetch products in cart";
        toast.error(message, { position: "bottom-center" });
        set({ cart: [], loading: false, errors: message });
        }
    },


    addToCart: async (product) => {
        try {
        await axiosInstance.post("/cart", { productId: product._id });
        toast.success("Product added to cart", { position: "top-right" });

        // Option 1: re-fetch from backend (safest)
        await get().fetchCartItems();
        get().calculateTotals();

        } catch (error: any) {
        const message =
            error.response?.data?.message || "Failed to add product to cart";
        toast.error(message, { position: "bottom-center" });
        set({ errors: message });
        }
    },

  
    clearCart: async () => {
        try {
        await axiosInstance.delete("/cart"); // adjust route if different
        set({ cart: [], coupon: null, total: 0, subtotal: 0 });
        toast.success("Cart cleared", { position: "top-right" });
        } catch (error: any) {
        const message =
            error.response?.data?.message || "Failed to clear cart";
        toast.error(message, { position: "bottom-center" });
        set({ errors: message });
        }
    },


    removeFromCart: async (productId) => {
        await axiosInstance.delete(`/cart/${productId}`);
        set((prevState) => ({ cart: prevState.cart.filter((item) => item._id !== productId) }));
        get().calculateTotals();
    },

    updateQuantity: async (productId, quantity) => {
        if (quantity === 0) {
            get().removeFromCart(productId);
            return;
        }

        await axiosInstance.put(`/cart/${productId}`, { quantity });
        set((prevState) => ({
            cart: prevState.cart.map((item) => (item._id === productId ? { ...item, quantity } : item)),
        }));
        get().calculateTotals();
    },





    calculateTotals: () => {
        const { cart, coupon } = get();
        const subtotal = cart.reduce(
        (sum, item) => sum + item.price * (item.quantity || 1),
        0
        );
        let total = subtotal;

        if (coupon ) {
        const discount = subtotal * (coupon.discountPercentage / 100);
        total = subtotal - discount;
        }

        set({ subtotal, total });
    },
}));
