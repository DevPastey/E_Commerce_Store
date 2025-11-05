import axiosInstance from "../lib/axios";
import { create } from "zustand";
import { toast } from "react-hot-toast";
import type { CartItem, CouponShape, ProductShape } from "../types/types";

type CartStore = {
    cart: ProductShape[],
    coupon: CouponShape | null,
    total: number,
    subtotal: number,
    loading: boolean,
    errors: Record<string, string>,
    addToCart: (product: any) => Promise<void>,
    fetchCartItems: () => Promise<void>,
    calculateTotals: () => void,

    
}

export const useCartStore = create<CartStore>()((set, get) => ({
    cart: [],
    coupon: null,
    total: 0,
    subtotal: 0,
    loading: false,
    errors: {},

    fetchCartItems: async () => {
        set({loading: true});

        try {
            const res = await axiosInstance.get("/cart");
            set({cart: res.data, loading: false});
            get().calculateTotals();

        } catch (error: any) {
            const message = error.response?.data?.message || "Failed to fetch products in cart";
            toast.error(message, {position: "bottom-center"});
            set({ cart: [], loading: false, errors: message });
        }
    },


    addToCart: async (product: any) => {
        console.log(product)
		try {
			const res = await axiosInstance.post("/cart", { productId: product._id });
            console.log(res)
			toast.success("Product added to cart");

			set((prevState) => {
				const existingItem = prevState.cart.find((item) => item._id === product._id);
				const newCart = existingItem
					? prevState.cart.map((item) =>
							item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
					  )
					: [...prevState.cart, { ...product, quantity: 1 }];
				return { cart: newCart };
			});
			get().calculateTotals();
		} catch (error: any) {
            const message = error.response?.data?.message || "Failed to add product to cart";
            toast.error(message, {position: "bottom-center"});
            set({ cart: [], loading: false, errors: message });
		}
	},
    
    
    calculateTotals: () => {
        const {cart, coupon} = get();
        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        let total = subtotal;

        if (coupon) {
            const discount = subtotal * (coupon.discountPercentage / 100);
            total = subtotal - discount;
        };

        set({ subtotal, total });
    }


}))
