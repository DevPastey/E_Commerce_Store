import Input from "../components/Input";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { LogIn, Lock, User, Mail, ArrowRight } from 'lucide-react';



const SignUpPage = () => {
    const handleSubmit = () => {
        console.log("form submitted")
    }

    const handleChange = () => {
        console.log("form changed");
    }
  return (
    <div className=" container flex flex-col items-center justify-center">

        <h1 className="text-primary-green text-xl font-bold mt-4">Create your account</h1>

        <form onSubmit={handleSubmit} className="w-120 bg-gray-900/70 py-4 px-8 rounded my-6">
            <Input type="text" label="Full name" name="name" placeholder="John Doe" icon={<User size={18} />} onChange={handleChange}/>
            <Input type="text" label="Email address" name="email" placeholder="email@example.com" icon={<Mail size={18} />} onChange={handleChange}/>
            <Input type="password" label="Password" name="password" placeholder="*********" icon={<Lock size={18} />} onChange={handleChange}/>
            <Input type="password" label="Confirm Password" name="confirm password" placeholder="*********" icon={<Lock size={18} />} onChange={handleChange}/>
            <Button label="Sign up" />
        </form>

        <Link to="/login" className="flex gap-2 text-sm justify-center items-center">
            <span>Already have account?</span> 
            <span className="text-primary-green/80 hover:text-primary-green">Login here</span>
            <ArrowRight size={14} className="mt-1 text-primary-green/80 hover:text-primary-green" />
        </Link>
        
    
    </div>
  )
}

export default SignUpPage
