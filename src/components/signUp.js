import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SignUp() {

  const [fullname, setFullname] = useState()
  const [password, setPassword] = useState()
  const [email, setEmail] = useState()
  const [confirmPass, setConfirmPass] = useState()

  const navigate = useNavigate()

  let handleName = (e) => {
    setFullname(e.target.value)
  }

  let handleEmail = (e) => {
    setEmail(e.target.value)
  }

  let handlePassword = (e) => {
    setPassword(e.target.value)
  }

  let handleConfirmPass = (e) => {
    setConfirmPass(e.target.value)
  }


  let handleSubmit = async (e) => {
    e.preventDefault()
    let data = {
      username: fullname,
      email: email,
      password: password
    }
    if (password !== confirmPass) {
      alert("Password Does not Match")

    }
    else if (!fullname || !email || !password || !confirmPass) {
      alert("Kindly fill all the credentials");
    }

    else {
     await axios.post("http://localhost:3000/user_create",data)
    //  console.log(response);
        .then(() => {
          // alert("Signup Successful");
          navigate('/otpverify');
        })
        .catch((err) => {
          console.error("Signup failed:", err);
          alert("Signup failed. Please try again.");
        });
    }
  }



  return (
    <>
      <div className=' flex justify-center items-center h-screen w-screen bg-colorOne'>
        <form className='flex flex-col justify-center items-center bg-colorTwo h-auto p-10 w-96 rounded-2xl shadow-2xl'>
          <h2 className='font-semibold text-2xl' >SignUp</h2>

          <br />
          <br />

          <p className='font-semibold mr-16'>Enter your full Name </p>
          <input type='text' onChange={handleName} required className='border-2 border-black w-56 rounded-md focus:shadow-md hover:border-colorThree transition duration-300 ease' />
          <br />

          <p className='font-semibold mr-11'>Enter your email address </p>
          <input type='email' onChange={handleEmail} required className='border-2 border-black w-56 rounded-md focus:shadow-md hover:border-colorThree transition duration-300 ease' />
          <br />
          <p className='font-semibold mr-16 pr-3'>Enter your password</p>
          <input type='password' onChange={handlePassword} required className='border-2 border-black w-56 rounded-md focus:shadow-md hover:border-colorThree transition duration-300 ease ' />
          <br />

          <p className='font-semibold mr-14'>Confirm your password</p>
          <input type='password' onChange={handleConfirmPass} required className='border-2 border-black w-56 rounded-md focus:shadow-md hover:border-colorThree transition duration-300 ease ' />
          <br />
          <input type='submit' value="SignUp" onClick={handleSubmit} className='bg-transparent hover:bg-colorThree text-black-700 font-semibold hover:text-white py-2 px-4 border border-colorThree hover:border-transparent rounded' />

          <a href="/" className='text-sm mt-4'>Already a User? Click <span className="text-blue-600 underline">here</span> to Login</a>
        </form>

      </div>
    </>
  )
}

export default SignUp