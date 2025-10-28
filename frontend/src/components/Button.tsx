import type { ButtonProps } from "../types/types"


const Button = ({label}: ButtonProps) => {
  return (
    <button className="w-full flex justify-center items-center py-1 rounded bg-primary-green/60 hover:bg-primary-green/80">
      {label}
    </button>
  )
}

export default Button
