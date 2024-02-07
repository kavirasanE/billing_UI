import React from 'react'
import logo from '../assests/hero.jpg'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <div className='flex justify-between items-center '>
        <Link to={"/dashboard"} className=' md:mx-20 '>
        <img src={logo}  alt='EasyBill' width={200} height={200} className='md:mt-2 p-6 md:p-3 md:mx-20' />
        </Link>
        <div className='flex gap-5 justify-between items-center md:mx-20 mx-2'>
            <Link to={'/'} className='font-semibold md:text-xl '>Profile</Link>
            <Link to={'/'} className='font-semibold md:text-xl'>Logout</Link>
        </div>
        </div>
    </div>
  )
}

export default Navbar
