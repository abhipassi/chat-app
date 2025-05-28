import React, { useState } from 'react'

function Login() {

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
  return (
    <>
    <div className=' flex justify-center items-center h-screen w-screen bg-colorOne'>
    <div className='flex flex-col justify-center items-center bg-colorTwo h-96 w-96 rounded-2xl shadow-2xl'>
        <h2 className='font-semibold text-2xl'>Login</h2>

        <br/> 
        <br />
        <p className='font-semibold mr-11'>Enter your email address </p>
        <input  type='email' className='border-2 border-black w-56 rounded-md focus:shadow-md hover:border-colorThree transition duration-300 ease'/>
        {/* <br /> */}
        <br/>
        <p className='font-semibold mr-16'>Enter your password</p>
        <input  type='text' className='border-2 border-black w-56 rounded-md focus:shadow-md hover:border-colorThree transition duration-300 ease ' />
        <br />
        <input  type='button' value="Login" className='bg-transparent hover:bg-colorThree text-black-700 font-semibold hover:text-white py-2 px-4 border border-green-300 hover:border-transparent rounded'/>
       <a href="#" className='text-sm mt-4'>New User? Click <span className="text-blue-600 underline">here</span> to Register</a>
    </div>

    </div>
    </>
  )
}

export default Login