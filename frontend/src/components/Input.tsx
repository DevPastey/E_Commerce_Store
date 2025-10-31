import type { InputProps } from "../types/types"
import getAutoCompleteValue from "../utils/getAutoCompleteValue";



const Input = ({name, placeholder, type, label, error, value, icon, onChange}: InputProps) => {

  const autoCompleteValue = getAutoCompleteValue(name, type);

  return (
    <div className="mt-6">
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
                autoComplete={autoCompleteValue}               
                className='mt-1 pl-8 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-1
                    px-3 text-white focus:outline-none focus:ring-2
                focus:ring-emerald-500 focus:border-emerald-500  placeholder:mt-2 '
                
            />
            <div className="absolute top-[13px] left-2 z-10 text-gray-400" >{icon}</div>
        </div>

        {error && <p className="text-red-500/90 text-xs mt-1 ">{error}</p>}
    
    </div>
  )
}

export default Input
