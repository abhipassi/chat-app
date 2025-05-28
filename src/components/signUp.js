import React from 'react'

function SignUp() {
  return (
        <>
    <div className=' flex justify-center items-center h-screen w-screen bg-colorOne'>
    <div className='flex flex-col justify-center items-center bg-colorTwo h-auto p-10 w-96 rounded-2xl shadow-2xl'>
        <h2 className='font-semibold text-2xl' >SignUp</h2>

        <br/> 
        <br />

        <p className='font-semibold mr-16'>Enter your full Name </p>
        <input  type='text' className='border-2 border-black w-56 rounded-md focus:shadow-md hover:border-colorThree transition duration-300 ease'/>
        <br />

        <p className='font-semibold mr-11'>Enter your email address </p>
        <input  type='email' className='border-2 border-black w-56 rounded-md focus:shadow-md hover:border-colorThree transition duration-300 ease'/>
        <br/>
        <p className='font-semibold mr-16 pr-3'>Enter your password</p>
        <input  type='text' className='border-2 border-black w-56 rounded-md focus:shadow-md hover:border-colorThree transition duration-300 ease ' />
        <br />

        <p className='font-semibold mr-14'>Confirm your password</p>
        <input  type='text' className='border-2 border-black w-56 rounded-md focus:shadow-md hover:border-colorThree transition duration-300 ease ' />
        <br />
        <input  type='button' value="SignUp" className='bg-transparent hover:bg-colorThree text-black-700 font-semibold hover:text-white py-2 px-4 border border-green-300 hover:border-transparent rounded'/>
        
       <a href="#" className='text-sm mt-4'>Already a User? Click <span className="text-blue-600 underline">here</span> to Login</a>
    </div>

    </div>
    </>
  )
}

export default SignUp