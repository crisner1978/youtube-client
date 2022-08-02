import React from 'react'
import { AppsIcon, HamburgerIcon, LogoIcon, SettingsIcon } from './Icons'
import { GoogleAuth, Search } from '.'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='z-50 dark:text-white dark:bg-grey fixed px-6 flex items-center justify-between py-4  w-full'>
      <div className='flex items-center'>
        <HamburgerIcon />
        <span className='ml-3 py-1'>
          <NavLink to="/">
            <LogoIcon style={{ width: 80, height: 24 }} />
          </NavLink>
        </span>
      </div>
      <Search />

      <ul className='flex items-center space-x-3 md:space-x-5'>
        <li>
          <AppsIcon />
        </li>
        <li><SettingsIcon /></li>
        <li><GoogleAuth /></li>
      </ul>
    </div>
  )
}

export default Navbar