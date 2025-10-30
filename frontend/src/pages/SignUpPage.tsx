import Input from "../components/Input";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { Lock, User, Mail, ArrowRight, Loader, UserPlus } from 'lucide-react';
import {easeInOut, motion} from "framer-motion";
import React, { useState } from "react";
import * as z from "zod";
import { useUserStore } from "../stores/useUserStore";

 

export const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/;

const userSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(2, "Name must be at least 2 characters long"),    
    email: z
      .email("Please enter a valid email address")
      .transform((val) => val.trim()),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters long")
      .regex(
        passwordRegex,
        "Password must include one uppercase letter, one lowercase letter, one number, and one special character"
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  }); 

type UserForm = z.infer<typeof userSchema>;


// type SafeParseReturnType<I, O> =
//   | { success: true; data: O }
//   | { success: false; error: ZodError<I> };


const SignUpPage = () => {

    const [formData, setFormData] = useState<UserForm>({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState<Partial<Record<keyof UserForm, string>>>({});
    const [validationResult, setValidationResult] = useState<
        ReturnType<typeof userSchema.safeParse> | null
    >(null);

    const {signup, loading} = useUserStore();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
      
        // Update local state
        const updatedData = { ...formData, [name]: value };
        setFormData(updatedData);
      
        // Validate only the changed field
        const fieldSchema = userSchema.shape[name as keyof typeof updatedData];
        const fieldResult = fieldSchema.safeParse(value);
      
        setErrors((prev) => ({
          ...prev,
          [name]: fieldResult.success ? undefined : fieldResult.error.issues[0].message,
        }));
      
        // Optionally keep full form validation for submit state tracking
        setValidationResult(userSchema.safeParse(updatedData));
    };
      


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
      
        // Validate full form on submit
        const result = userSchema.safeParse(formData);
        setValidationResult(result);
      
        if (!result.success) {
          const tree = z.treeifyError(result.error);
          setErrors({
            name: tree.properties?.name?.errors?.[0],
            email: tree.properties?.email?.errors?.[0],
            password: tree.properties?.password?.errors?.[0],
            confirmPassword: tree.properties?.confirmPassword?.errors?.[0],
          });
          console.warn("❌ Invalid form submission");
          return;
        }
      
        // Proceed with signup
        const success = await signup(result.data);
        console.log("✅ Valid data sent:", validationResult);
      
        if (success) {
          setFormData({
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
          });
          setErrors({});
        }
    };
      


    return (
        <div className=" container flex flex-col items-center justify-center sm:px-6 lg:px-8">
            <motion.div
            initial={{ opacity:0, y:-20 }}
            animate={{ opacity:1, y:0 }}
            transition={{ duration: 0.8, ease:easeInOut}}
            >
                <h2 className="text-primary-green text-2xl md:text-3xl font-bold mt-4">Create your account</h2>

            </motion.div>
            
            <motion.div
            initial={{ opacity:0, y:20 }}
            animate={{ opacity:1, y:0 }}
            transition={{ duration: 0.8, delay:0.2, ease:easeInOut}}
            >
                <div className="w-120 bg-gray-900/70 py-2 px-4 shadow-md sm:rounded-lg sm:px-10 rounded my-6">
                    <form onSubmit={handleSubmit} >
                        <Input type="text" label="Full name" name="name" value={formData.name} placeholder="John Doe" icon={<User size={18} aria-hidden={true} />} error={errors.name} onChange={handleChange}/>
                        <span>{}</span>
                        <Input type="text" label="Email address" name="email" value={formData.email} placeholder="email@example.com" icon={<Mail size={18} aria-hidden="true" />} error={errors.email} onChange={handleChange}/>
                        <Input type="password" label="Password" name="password" value={formData.password} placeholder="*********" icon={<Lock size={18} aria-hidden="true" />} error={errors.password} onChange={handleChange}/>
                        <Input type="password" label="Confirm Password" name="confirmPassword" value={formData.confirmPassword} placeholder="*********" icon={<Lock size={18} aria-hidden="true" />} error={errors.confirmPassword} onChange={handleChange}/>
                        <Button disabled={loading} type="submit">
                            {loading ? (
                                <> 
                                    <Loader className="mr-2 h-5 w-5 animate-spin" aria-hidden="true" /> 
                                    Loading...
                                </>
                            ): (
                                <>
                                    <UserPlus className="mr-2 h-5 w-5" aria-hidden="true" />
                                    Sign up
                                </>
                            )}
                        </Button>
                    </form>

                    
                </div>

                <div className="flex gap-2 text-sm justify-center items-center">
                    <span className="text-gray-400">Already have an account?</span> 
                    <Link to="/login" className="text-primary-green/80 hover:text-primary-green">Login here</Link>
                    <ArrowRight size={14} className="mt-1 text-primary-green/80 hover:text-primary-green" />
                </div>
            </motion.div>  

        </div>
    )
}

export default SignUpPage
