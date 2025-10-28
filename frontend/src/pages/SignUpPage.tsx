import Input from "../components/Input";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { Lock, User, Mail, ArrowRight, Loader, UserPlus } from 'lucide-react';
import {easeInOut, motion} from "framer-motion";
import React, { useState } from "react";
import type { FormShape } from "../types/types";
import * as z from "zod";
import {ZodError} from "zod";

 

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const userSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters long"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8,"Password must be a minimum of 8 Characters long").regex(passwordRegex, "Password must contain at least 8 characters, one uppercase, one lowercase, one number, and one special character"),
    confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"], // This sets the error on the confirmPassword field
}); 

type UserForm = z.infer<typeof userSchema>;


type SafeParseReturnType<I, O> =
  | { success: true; data: O }
  | { success: false; error: ZodError<I> };


const SignUpPage = () => {

    const loading = false;
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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        // Update local state immediately
        const updatedData = { ...formData, [name]: value };
        setFormData(updatedData);
        
        // Validate with Zod
        const result = userSchema.safeParse(updatedData);
        setValidationResult(result);

        // Handle validation errors
        if (!result.success) {
            const fieldErrors = z.flattenError(result.error).fieldErrors;

            setErrors({
                name: fieldErrors.name?.[0],
                email: fieldErrors.email?.[0],
                password: fieldErrors.password?.[0],
                confirmPassword: fieldErrors.confirmPassword?.[0],
            });

            console.log(fieldErrors);
            return;
        }else{
            setErrors({});
        }
    
    };


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log("form data", formData);
        // console.log("validation result", validationResult);

        if (!validationResult?.success) {
            console.warn("❌ Invalid form");
            return;
        }

        console.log("✅ Valid data:", validationResult.data);
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

                <Link to="/login" className="flex gap-2 text-sm justify-center items-center">
                    <span className="text-gray-400">Already have account?</span> 
                    <span className="text-primary-green/80 hover:text-primary-green">Login here</span>
                    <ArrowRight size={14} className="mt-1 text-primary-green/80 hover:text-primary-green" />
                </Link>
            </motion.div>  

        </div>
    )
}

export default SignUpPage
