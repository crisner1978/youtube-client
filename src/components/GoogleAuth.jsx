import React from 'react'
import { SignInIcon } from './Icons'

const GoogleAuth = () => {
  return (
    <button tabIndex={0} type="button" className='py-2 -my-2 px-4 text-sm min-w-16 rounded-sm border border-blue'>
      <span className="whitespace-nowrap flex items-center justify-center uppercase text-blue">
        <span className="mr-2 -ml-1 whitespace-nowrap text-[24px]">
          <SignInIcon />
        </span>
        sign in
      </span>
    </button>
  )
}

export default GoogleAuth