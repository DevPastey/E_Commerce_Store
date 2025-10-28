import type { InputProps } from "../types/types"



const Input = ({name, placeholder, type, label, value, icon, onChange}: InputProps) => {
  return (
    <div>
      	<label htmlFor={name} className='block text-sm font-medium text-gray-300'>
            {label}
        </label>

        <div className="relative">
            <input
                type={type}
                id={name}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}                
                className='mt-1 mb-6 pl-8 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2
                    px-3 text-white focus:outline-none focus:ring-2
                focus:ring-emerald-500 focus:border-emerald-500  placeholder:mt-2 '
                required
            />
            <div className="absolute top-[13px] left-2 z-10 text-gray-400" >{icon}</div>
        </div>
        
    
    </div>
  )
}

export default Input
