import { create } from "zustand";
import axiosInstance from "../lib/axios";
import {toast} from "react-hot-toast";
import type { FormShape, LoginProps } from "../types/types";
import axios from "axios";

interface UserStore {
    user: any; // Replace `any` with your User type if you have one
    loading: boolean;
    checkingAuth: boolean;
    errors: Record<string, string>;
    signup: (data: FormShape) => Promise<boolean>;
    login: (data: LoginProps) => Promise<boolean>;

}



export const useUserStore = create<UserStore>((set, get) => ({
  user: null,
  loading: false,
  checkingAuth: true,
  errors: {},

  // setErrors: (errors) => set(() => ({ errors })),

  signup: async ({name, email, password, confirmPassword}: FormShape) => {
    set({loading: true});
    

    try {
      const res = await axiosInstance.post("/auth/signup", {name, email, password, confirmPassword});
      set({user: res.data, loading: false});
      toast.success("Sign up successful", {position: "bottom-center"});
      return true; // ✅ success
    } catch (error: any) {
      set({ loading: false});
      // toast.error(error.response.data.message || "An error occurred!");

      // ✅ Type-safe error handling
      if (axios.isAxiosError(error)) {
        const message =
          (error.response?.data as { message?: string })?.message ||
          "Signup failed.";
        toast.error(message, {position: "bottom-center"});
      } else if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("An unexpected error occurred.");
      }

      return false; // ❌ failed
    }
  },

  login: async({email, password}: LoginProps) => {
    set({loading: true});
    
    try {
      const res = await axiosInstance.post("/auth/login", {email, password} );
      set({user: res.data, loading: false});
    
      toast.success("Login successful", {position: "bottom-center"});
      return true;

    } catch (error) {
      set({loading: false});
    
      if (axios.isAxiosError(error)) {
        const message =
          (error.response?.data as { message?: string })?.message ||
          "Invalid email or password";
        toast.error(message, {position: "bottom-center"});
      } else if (error instanceof Error) {
        toast.error(error.message, {position: "bottom-center"});
      } else {
        toast.error("An unexpected error occurred.", {position: "bottom-center"});
      }
      
      return false;
    }
  },


}))