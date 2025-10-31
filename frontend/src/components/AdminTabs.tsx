import type { AdminTabProps } from "../types/types"



const AdminTabs = ({label, isActive, onClick, icon: Icon}: AdminTabProps) => {

  return (

    <button onClick={onClick} className={` ${ isActive ? "bg-primary-green/80" : ""} bg-gray-700 py-1 px-2 rounded flex justify-center items-center gap-1 cursor-pointer`}>
        <Icon  size={14}/>
        <span>{label}</span>
    </button>
  )
}

export default AdminTabs
