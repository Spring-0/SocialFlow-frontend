import React from 'react'

export default function Register() {
  return (
    <div className='flex items-center justify-center w-full h-full'>
      {/* Login Component */}
      <div className='w-full max-w-md p-8'>
        {/* Text */}
        <div className='mb-8'>
          <h1 className='mb-4 text-4xl font-bold text-white'>Register</h1>
          <h2 className='text-white'>
            Already have an account?{' '}
            <a className='text-sky-500' href='/login'>
              Login
            </a>{' '}
          </h2>
        </div>

        {/* Input & labels */}
        <form className='flex flex-col space-y-6'>
          {/* email */}
          <div className='flex flex-col'>
            <label className='mb-2 font-medium text-white' htmlFor='email'>
              Email
            </label>
            <input
              className='px-3 py-2 border rounded-lg'
              id='email'
              type='email'
              placeholder='Email'
            />
          </div>

          {/* password */}
          <div className='flex flex-col'>
            <label className='mb-2 font-medium text-white' htmlFor='password'>
              Password
            </label>
            <input
              className='px-3 py-2 border rounded-lg'
              id='password'
              type='password'
              placeholder='Password'
            />
          </div>

          {/* confirm password */}
          <div className='flex flex-col'>
            <label
              className='mb-2 font-medium text-white'
              htmlFor='confirmPassword'
            >
              Confirm Password
            </label>
            <input
              className='px-3 py-2 border rounded-lg'
              id='confirmPassword'
              type='password'
              placeholder='Confirm Password'
            />
          </div>

          {/* submit button */}
          <button
            className='py-2 font-bold text-white rounded-lg bg-sky-500 hover:bg-sky-600'
            type='submit'
          >
            Register
          </button>
        </form>
      </div>
    </div>
  )
}
