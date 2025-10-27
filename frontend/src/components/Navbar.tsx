import { Link } from "react-router-dom"
import { LayoutDashboard, LogOut, ShoppingCart } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="absolute top-0 w-full bg-gray-900 flex items-center justify-between py-1 px-8 text-sm">
        
       <div className="text-primary-green text-lg font-bold">E-commerce</div>

       <div className="flex gap-6 py-2 justify-center text-gray-400  mr-8 ">
            <Link to="/">Home</Link>
            
            <div className="flex items-center gap-1">
                <ShoppingCart size={14}/> 
                <span>Cart</span>
            </div>

            <div className="bg-green-700 flex px-2 py- gap-1 items-center rounded text-white">
                <LayoutDashboard size={12} />
                <span>Dashboard</span>
            </div>

            <div className="bg-gray-600/60 px-2 py-1 rounded text-white"><LogOut size={14} /></div>
       </div>

    </div>
  )
}

export default Navbar
