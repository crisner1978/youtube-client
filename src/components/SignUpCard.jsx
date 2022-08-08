import React from 'react'
import { GoogleAuth } from '.'

const SignUpCard = ({ description, icon, title}) => {
  return (
    <div className='flex items-center justify-center flex-col h-screen'>
    {icon}
      <div className='my-6 text-center'>
        <h1 className='text-2xl sm:text-3xl font-semibold'>{title}</h1>
        <p className='text-sColor text-sm sm:text-lg mt-2'>{description}</p>
        <br />
        <GoogleAuth elementId="subscriptionBtn" buttonSize="large" />
      </div>
    </div>
  )
}

export default SignUpCard