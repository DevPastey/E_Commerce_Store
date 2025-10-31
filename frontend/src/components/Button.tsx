import type { ButtonProps } from "../types/types"


const Button: React.FC<ButtonProps> = ({ children, disabled, type}) => {
  return (
    <button type={type} className={` ${disabled ? 'hover:cursor-not-allowed' : ""} hover:cursor-pointer w-full mt-8  flex justify-center items-center py-1 rounded bg-primary-green/60 hover:bg-primary-green/80`} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button
