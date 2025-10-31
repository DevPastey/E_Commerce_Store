import { useState } from "react";
import AdminTabs from "../components/AdminTabs";
import { adminTabs } from "../constants/adminTabs";
import { easeInOut } from "framer-motion";
import {motion} from "framer-motion";
import CreateProductForm from "../components/CreateProductForm";
import ProductsTab from "../components/ProductsTab";
import AnalyticsTab from "../components/AnalyticsTab";

const isAdmin = true;

const AdminPage = () => {

  const [isActiveTab, setIsActiveTab] = useState<string>("create");

   
  return (
    <div className="flex flex-col justify-center items-center pb-10">
      <motion.div
        initial={{ opacity:0, y:-20 }}
        animate={{ opacity:1, y:0 }}
        transition={{ duration: 0.8, ease:easeInOut}} 
      >
        {isAdmin && (
          <div className="flex flex-col gap-4 justify-center items-center text-white">
            <h1 className="text-primary-green text-2xl font-bold">Admin Dashboard</h1>
              
            <div className="flex gap-4 text-sm">
              {adminTabs.map(({id, label, icon}) => (
                <AdminTabs 
                  label={label} 
                  icon={icon}
                  key={label}
                  isActive={ isActiveTab === id}
                  onClick={() => {setIsActiveTab(id)}}
                />
              ))}
            </div>
          </div>
        )}
      </motion.div>
      

      <div>
        {isActiveTab === "create" && (<CreateProductForm />)}
        {isActiveTab === "product" && (<ProductsTab />)}
        {isActiveTab === "analytics" && (<AnalyticsTab />)}
      </div>
    </div>
  )
}

export default AdminPage
