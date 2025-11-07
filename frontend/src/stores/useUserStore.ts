import { create } from "zustand";
import axiosInstance from "../lib/axios";
import {toast} from "react-hot-toast";
import type { FormShape, LoginProps } from "../types/types";
import axios from "axios";

interface UserStore {
  user: FormShape | null; // Replace `any` with your User type if you have one
  loading: boolean;
  checkingAuth: boolean;
  errors: Record<string, string>;
  signup: (data: FormShape) => Promise<boolean>;
  login: (data: LoginProps) => Promise<boolean>;
  checkAuth: () => Promise<void>;
  logout: () => Promise<void>;
  refreshToken: () => Promise<void>;

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
      toast.success("Sign up successful", {position: "top-right"});
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
      get().checkAuth();
    
      toast.success("Login successful", {position: "top-right"});
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
  
  
  logout: async () => {
    try {
      await axiosInstance.post("/auth/logout");
      set({user: null});
    } catch (error: any) {
      toast.error(error.response?.data?.message, {position: "bottom-center"})
    }
  },

  checkAuth: async () => {
    set({checkingAuth: true});
    try {
      const res = await axiosInstance.get("/auth/profile");
      set({user: res.data, checkingAuth: false});
    } catch (error) {
      set({checkingAuth: false, user: null});
    }
  },

  refreshToken: async () => {
    // Prevent multiple simultaneous refresh attempts
    if (get().checkingAuth) return;

    set({checkingAuth: true});

    try {
      const res = await axiosInstance.post("auth/refresh-token", {}, {withCredentials: true});
      set({ checkingAuth: false});
      return res.data;
    } catch (error) {
      set({ user: null, checkingAuth: false});  
      throw error;
    }
  },

}));


//axios interceptors for refreshing access token

let refreshPromise: any = null;

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if(error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // If a refresh is already in progress, wait for it to complete
        if (refreshPromise) {
          await refreshPromise;
          return axiosInstance(originalRequest);
        };

        //Start a new refresh process
        refreshPromise = useUserStore.getState().refreshToken();
        await refreshPromise;
        refreshPromise = null;

        return axiosInstance(originalRequest);
      } catch (refreshError) {
        //If refresh fails, redirect to login or handle as needed
        useUserStore.getState().logout();
        return Promise.reject(refreshError);
      }

    }

    return Promise.reject(error);
  }
);