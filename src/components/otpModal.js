import React from 'react'

function OtpModal() {
  return (
    <div className=' flex justify-center items-center h-screen w-screen bg-colorOne'> <div className='flex flex-col justify-center items-center bg-colorTwo h-auto p-10 w-96 rounded-2xl shadow-2xl'>
        <h2 className='font-semibold text-2xl'>Verification</h2>

        <br/> 
        <br />

        <p className='font-semibold mr-4'>Enter the sent on your email</p>
        <input  type='text' className='border-2 border-black w-56 rounded-md focus:shadow-md hover:border-colorThree transition duration-300 ease ' />
        <br />
        <input  type='button' value="Submit" className='bg-transparent hover:bg-colorThree text-black-700 font-semibold hover:text-white py-2 px-4 border border-colorThree hover:border-transparent rounded'/>

    </div>





    </div>
  )
}

export default OtpModal