import { Link } from "react-router-dom"
import { LogIn, Lock, UserPlus, LogOut, ShoppingCart } from 'lucide-react';
import { useUserStore } from "../stores/useUserStore";



const Navbar = () => {

  const {user, logout} = useUserStore();

  const isAdmin = user?.role;

  return (
    <div className="fixed top-0 w-full bg-gray-900 flex items-center justify-between py-1 px-8 text-sm  z-40 backdrop-blur-lg shadow-lg transition duration-300 border-b border-primary-green/20">
        
       <Link to="/" className="text-primary-green text-lg font-bold">E-commerce</Link>

       <nav className="flex gap-4 py-2 justify-center text-gray-400  mr-8 ">
          <Link to="/" className="hover:text-emerald-400 transition duration-300 ease-in-out">Home</Link>

          {user && (
            <Link to={"/cart"} className="relative flex items-center gap-1 group hover:text-emerald-400 transition duration-300 ease-in-out">
              <ShoppingCart size={14} className=""/> 
              <span className="hidden sm:inline">Cart</span>
              <span className="absolute -top-1 -left-2 bg-primary-green/50 text-white rounded-full px-1.5 py-px text-xs group-hover:bg-emerald-400 transition duration-300 ease-in-out">3</span>
            </Link>
          )}
          

          {isAdmin && (
            <Link to={"/admin-dashboard"} className="bg-primary-green/80 hover:bg-primary-green/90 flex px-2 py- gap-1 items-center rounded text-white">
              <Lock size={14} />
              <span className="hidden sm:inline">Dashboard</span>
            </Link>
          )}
          
          {user 
            ? (
               <button className="flex cursor-pointer items-center bg-gray-700 hover:bg-gray-600 transition duration-300 ease-in-out px-2 py-1 rounded text-white"
                 onClick={logout}
               >
                  <LogOut size={14} />
                  <span className="hidden sm:inline ml-2">Log Out</span>
              </button>) 
            : (<>
                  <Link to={"/signup"} className="flex items-center bg-primary-green/50 hover:bg-primary-green/70 px-2 py-1 rounded text-white">
                    <UserPlus size={14} className="mr-2" /> 
                    Sign Up 
                  </Link>

                  <Link to={"/login"} className="flex items-center bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded text-white">
                    <LogIn size={14} className="mr-2" /> 
                    Login 
                  </Link>
                </>
            )
          }
          
       </nav>

    </div>
  )
}

export default Navbar
