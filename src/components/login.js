import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login() {
  
  const navigate = useNavigate()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
  

    let handleEmail = (e) =>{
      setEmail(e.target.value)
    }

    let handlePassword = (e) =>{
      setPassword(e.target.value)
    }

    let handleSubmit =  async (e) =>{
      e.preventDefault()
      let data = {
        email:email,
        password:password
      }
      console.log(data);
      
      try{
        let response = await axios.post("http://localhost:3000/user_login",data)
        console.log(response);
          navigate('/dashboard')
      }
      catch(err){
        console.log(err);
      }
    }

  return (
    <>
    <div className=' flex justify-center items-center h-screen w-screen bg-colorOne'>
    <form className='flex flex-col justify-center items-center bg-colorTwo h-96 w-96 rounded-2xl shadow-2xl'>
        <h2 className='font-semibold text-2xl'>Login</h2>

        <br/> 
        <br />
        <p className='font-semibold mr-11'>Enter your email address </p>
        <input  type='email' required onChange={handleEmail} className='border-2 border-black w-56 rounded-md focus:shadow-md hover:border-colorThree transition duration-300 ease'/>
        {/* <br /> */}
        <br/>
        <p className='font-semibold mr-16'>Enter your password</p>
        <input  type='text' required onChange={handlePassword} className='border-2 border-black w-56 rounded-md focus:shadow-md hover:border-colorThree transition duration-300 ease ' />
        <br />
        <input  type='submit' value="Login" onClick={handleSubmit} className='bg-transparent hover:bg-colorThree text-black-700 font-semibold hover:text-white py-2 px-4 border border-colorThree hover:border-transparent rounded'/>
       <a href="/SignUp" className='text-sm mt-4'>New User? Click <span className="text-blue-600 underline">here</span> to Register</a>
    </form>

    </div>
    </>
  )
}

export default Login