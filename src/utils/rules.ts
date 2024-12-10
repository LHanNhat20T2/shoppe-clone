import type { RegisterOptions, UseFormGetValues } from 'react-hook-form'
type FormData = {
  email: string
  password: string
  confirm_password: string
}

type Rules = { [key in 'email' | 'password' | 'confirm_password']?: RegisterOptions<FormData> }
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getRules = (getValues?: UseFormGetValues<any>): Rules => ({
  email: {
    required: {
      value: true,
      message: 'Email là bắt buộc'
    },
    maxLength: {
      value: 160,
      message: 'Độ dài từ 6-160 ký tự'
    },
    minLength: {
      value: 6,
      message: 'Độ dài từ 6-160 ký tự'
    }
  },
  password: {
    required: {
      value: true,
      message: 'Password là bắt buộc'
    },
    maxLength: {
      value: 160,
      message: 'Độ dài từ 6-160 ký tự'
    },
    minLength: {
      value: 6,
      message: 'Độ dài từ 6-160 ký tự'
    }
  },
  confirm_password: {
    required: {
      value: true,
      message: 'Nhập lại password là bắt buộc'
    },
    maxLength: {
      value: 160,
      message: 'Độ dài từ 6-160 ký tự'
    },
    minLength: {
      value: 6,
      message: 'Độ dài từ 6-160 ký tự'
    },
    validate:
      typeof getValues === 'function'
        ? (value) => value === getValues('password') || 'Nhap lai password không khớp'
        : undefined
  }
})
export default getRules
