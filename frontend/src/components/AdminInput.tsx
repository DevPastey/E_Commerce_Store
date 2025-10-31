import type { InputProps } from "../types/types"
import getAutoCompleteValue from "../utils/getAutoCompleteValue"

const AdminInput = ({name, step, placeholder, type, label, error, value, onChange}: InputProps) => {
    
    const autoCompleteValue = getAutoCompleteValue(name, type);

  return (
    <div className="mt-4">
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
                step={step}                                                                         
                onChange={onChange} 
                autoComplete={autoCompleteValue}               
                className='mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-1
                    px-3 text-white focus:outline-none focus:ring-2
                focus:ring-emerald-500 focus:border-emerald-500  placeholder:mt-2 '
                
            />
        </div>

        {error && <p className="text-red-500/90 text-xs mt-1 ">{error}</p>}
    
    </div>
  )
}


export default AdminInput