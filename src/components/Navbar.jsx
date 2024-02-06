import React from 'react'
import logo from '../assests/hero.jpg'
const Navbar = () => {
  return (
    <div className='flex justify-between   shadow-xl  shadow-slate-300 '>
        <div className=' p-2 items-center mx-20'>
        <img src={logo}  alt='EasyBill' width={200} height={200} className='mt-2' />
        
        </div>
        <div className='flex flex-row gap-4 items-center mx-20 '>
            <p className='font-semibold text-xl'>Profile</p>
            <p className='font-semibold text-xl'>Logout</p>
        </div>
     
    </div>
  )
}

export default Navbar
