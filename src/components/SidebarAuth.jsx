import React from 'react'
import { GoogleAuth } from '.'

const SidebarAuth = () => {
  return (
    <div className='py-3 px-5'>
      <p>Sign in to like videos, comment, and subscribe.</p>
      <br />
      <GoogleAuth />
    </div>
  )
}

export default SidebarAuth