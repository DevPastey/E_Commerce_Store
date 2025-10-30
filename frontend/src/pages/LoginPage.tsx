import  {useState} from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { Lock, User, Mail, ArrowRight, Loader, } from 'lucide-react';
import {easeInOut, motion} from "framer-motion";
import Input from "../components/Input";
import { useUserStore } from "../stores/useUserStore";
import * as z from "zod";
import { passwordRegex } from "./SignUpPage";

const loginSchema = z.object({
  email: z
  .email("Invalid email address")
  .transform((val) => val.trim()),
  password: z
  .string()
  .min(8,"Password must be a minimum of 8 Characters long")
  .regex(passwordRegex, "Password must contain at least 8 characters, one uppercase, one lowercase, one number, and one special character"),
});

type loginForm = z.infer<typeof loginSchema>;

const LoginPage = () => {
  const [user, setUser] = useState<loginForm>
  ({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof loginForm, string>>>({});
  const [validationResult, setValidationResult] = useState< ReturnType<typeof loginSchema.safeParse > | null>(null)


  const {login, loading} = useUserStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const  {name, value} = e.target;

    // Update local state immediately
    const updatedData = { ...user, [name]: value };
    setUser(updatedData);

    // Validate only the changed field
    const fieldSchema = loginSchema.shape[name as keyof typeof updatedData];
    const fieldResult = fieldSchema.safeParse(value);
  
    setErrors((prev) => ({
      ...prev,
      [name]: fieldResult.success ? undefined : fieldResult.error.issues[0].message,
    }));
  
    // Optionally keep full form validation for submit state tracking
    setValidationResult(loginSchema.safeParse(updatedData));
    

  };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("✅ user login:", user);

    // Validate full form on submit
    const result = loginSchema.safeParse(user);
    setValidationResult(result);// optional for debugging purpose
      

    if (!result.success) {
      const tree = z.treeifyError(result.error);
      setErrors({
        email: tree.properties?.email?.errors?.[0],
        password: tree.properties?.password?.errors?.[0],
      });
      console.warn("❌ Invalid form submission");
      return;
    }

    const success = await login(result.data);
    console.log("✅ Valid login credentials sent:", validationResult);

    if (success) {
      setUser({
        email: "",
        password: "",
      });
    }

  };


  return (
    <div className=" container flex flex-col items-center justify-center sm:px-6 lg:px-8">
      <motion.div
      initial={{ opacity:0, y:-20 }}
      animate={{ opacity:1, y:0 }}
      transition={{ duration: 0.8, ease:easeInOut}}
      >
          <h2 className="text-primary-green text-2xl md:text-3xl font-bold mt-4">Login to your account</h2>

      </motion.div>
      
      <motion.div
      initial={{ opacity:0, y:20 }}
      animate={{ opacity:1, y:0 }}
      transition={{ duration: 0.8, delay:0.2, ease:easeInOut}}
      >
          <div className="w-120 bg-gray-900/70 py-2 px-4 shadow-md sm:rounded-lg sm:px-10 rounded my-6">
              <form onSubmit={handleSubmit} >
                <Input type="text" label="Email address" name="email" value={user.email} placeholder="email@example.com" error={errors.email} icon={<Mail size={18} aria-hidden="true" />} onChange={handleChange}/>
                <Input type="password" label="Password" name="password" value={user.password} placeholder="*********" error={errors.password} icon={<Lock size={18} aria-hidden="true" />} onChange={handleChange}/>
                <Button disabled={loading} type="submit">
                    {loading ? (
                        <> 
                            <Loader className="mr-2 h-5 w-5 animate-spin" aria-hidden="true" /> 
                            Loading...
                        </>
                    ): (
                        <>
                            <User className="mr-2 h-5 w-5" aria-hidden="true" />
                            Login
                        </>
                    )}
                </Button>
              </form>

              
          </div>

          <div className="flex gap-2 text-sm justify-center items-center">
            <span className="text-gray-400">Don't have an account?</span> 
            <Link to={"/signup"}  className="text-primary-green/80 hover:text-primary-green">sign up now</Link>
            <ArrowRight size={14} className="mt-1 text-primary-green/80 hover:text-primary-green" />
          </div>
      </motion.div>  

  </div>
  )
}

export default LoginPage
