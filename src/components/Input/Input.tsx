import type { RegisterOptions, UseFormRegister } from 'react-hook-form'

interface Props {
  type: React.HTMLInputTypeAttribute
  errorMessage?: string
  placeholder?: string
  className?: string
  name: string
  register: UseFormRegister<any>
  rules?: RegisterOptions<any> | undefined // Cho phép rules là undefined
  autoComplete?: string
}

const Input = ({ type, errorMessage, placeholder, className, autoComplete, name, register, rules }: Props) => {
  return (
    <div className={className}>
      <input
        type={type}
        placeholder={placeholder}
        className='w-full p-3 border border-gray-300 rounded-sm shadow-sm outline-none focus:border-gray-500'
        autoComplete={autoComplete}
        {...register(name, rules)}
      />
      <div className='mt-1 text-red-600 min-h-[1.25rem] text-sm'>{errorMessage}</div>
    </div>
  )
}
export default Input
