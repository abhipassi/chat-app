import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function OtpModal() {
 const navigate = useNavigate()
  
let [inputValue,setInputValue] = useState()
let [errmessage, setErrMessage] = useState(false)

let handleChange = (e) =>{
  let value = e.target.value
  setInputValue(value)
}
 let handleVerify = async () =>{
  try {
    // let data = {
    //   verificationcode:inputValue
    // }
   let response =  await axios.post('http://localhost:3000/otp',{verificationcode:inputValue})
  //  console.log(response.data,"done");
  if(response.status === 200){
    setErrMessage(false)
    navigate('/dashboard')
  }
  else if(response.status === 404){
    // alert('Invalid or expired verification code')
    setErrMessage(true)
  }
  else if(response.status === 500){
    // alert('OTP verification error')
    setErrMessage(true)
  }
  } catch (error) {
  console.error('Verification failed:', error);
  setErrMessage(true)

  }
  }
  return (
    <div className=' flex justify-center items-center h-screen w-screen bg-colorOne'> <div className='flex flex-col justify-center items-center bg-colorTwo h-auto p-10 w-96 rounded-2xl shadow-2xl'>
        <h2 className='font-semibold text-2xl'>Verification</h2>

        <br/> 
        <br />

        <p className='font-semibold mr-4'>Enter the sent on your email</p>
        <input  type='text' onChange={handleChange} className='border-2 border-black w-56 rounded-md focus:shadow-md hover:border-colorThree transition duration-300 ease ' />
        {errmessage && <p className='font-semibold mr-4 text-red-600'>Invalid or expired verification code</p>}
        <br />
        <input  type='button' onClick={handleVerify} value="Submit" className='bg-transparent hover:bg-colorThree text-black-700 font-semibold hover:text-white py-2 px-4 border border-colorThree hover:border-transparent rounded'/>

    </div>





    </div>
  )
}

export default OtpModal