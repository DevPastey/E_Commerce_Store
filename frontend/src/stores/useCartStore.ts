import axiosInstance from "../lib/axios";
import { create } from "zustand";
import { toast } from "react-hot-toast";
import type { CouponShape, ProductShape } from "../types/types";

type CartStore = {
  cart: ProductShape[];
  coupon: CouponShape | null;
  total: number;
  subtotal: number;
  loading: boolean;
  errors: string | Record<string, string>;
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
  errors: {},


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
      toast.success("Product added to cart");

      // Option 1: re-fetch from backend (safest)
      await get().fetchCartItems();

      // Option 2 (faster, optimistic update):
      // set((prev) => {
      //   const existingItem = prev.cart.find((item) => item._id === product._id);
      //   const newCart = existingItem
      //     ? prev.cart.map((item) =>
      //         item._id === product._id
      //           ? { ...item, quantity: item.quantity + 1 }
      //           : item
      //       )
      //     : [...prev.cart, { ...product, quantity: 1 }];
      //   return { ...prev, cart: newCart };
      // });

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
      toast.success("Cart cleared");
    } catch (error: any) {
      const message =
        error.response?.data?.message || "Failed to clear cart";
      toast.error(message, { position: "bottom-center" });
      set({ errors: message });
    }
  },


  removeFromCart: async (productId) => {
    await axiosInstance.delete(`/cart`, { data: { productId } });
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

    if (coupon) {
      const discount = subtotal * (coupon.discountPercentage / 100);
      total = subtotal - discount;
    }

    set({ subtotal, total });
  },
}));
