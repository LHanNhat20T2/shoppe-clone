import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='bg-orange'>
      <div className='px-4 mx-auto max-w-7xl'>
        <div className='grid grid-cols-1 py-12 lg:grid-cols-5 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='p-10 text-left bg-white rounded shadow-sm'>
              <div className='text-2xl'>Đăng ký</div>
              <div className='mt-8'>
                <input
                  type='email'
                  name='email'
                  placeholder='Email'
                  className='w-full p-3 border border-gray-300 rounded-sm shadow-sm outline-none focus:border-gray-500'
                />
                <div className='mt-1 text-red-600 min-h-[1rem] text-sm'></div>
              </div>
              <div className='mt-3'>
                <input
                  type='password'
                  name='password'
                  placeholder='Password'
                  className='w-full p-3 border border-gray-300 rounded-sm shadow-sm outline-none focus:border-gray-500'
                />
                <div className='mt-1 text-red-600 min-h-[1rem] text-sm'></div>
              </div>
              <div className='mt-3'>
                <input
                  type='password'
                  name='confirm_password'
                  placeholder='Confirm Password'
                  className='w-full p-3 border border-gray-300 rounded-sm shadow-sm outline-none focus:border-gray-500'
                />
                <div className='mt-1 text-red-600 min-h-[1rem] text-sm'></div>
              </div>
              <div className='mt-3'>
                <button className='w-full px-2 py-4 text-sm text-center text-white uppercase bg-red-500 hover:bg-red-600'>
                  Đăng ký
                </button>
              </div>
              <div className='mt-8 '>
                <div className='flex items-center justify-center'>
                  <span className='text-slate-400'>Bạn đã có tài khoản?</span>
                  <Link className='ml-1 text-red-400' to='/login'>
                    Đăng nhập
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
