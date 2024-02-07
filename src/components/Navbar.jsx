import React from 'react'
import logo from '../assests/hero.jpg'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex justify-between '>
        <Link to={"/dashboard"} className=' items-center mx-20'>
        <img src={logo}  alt='EasyBill' width={200} height={200} className='mt-2' />
        
        </Link>
        <div className='flex flex-row gap-4 items-center mx-20 '>
            <Link to={'/profile'} className='font-semibold text-xl'>Profile</Link>
            <Link to={'/'} className='font-semibold text-xl'>Logout</Link>
        </div>
     
    </div>
  )
}

export default Navbar
