import React from 'react'
import Navbar from '../components/Navbar'

const Dashboard = () => {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div className='mt-12 flex flex-row  justify-between mx-10  rounded-full  shadow-sm border-2 shadow-blue-600'>
        <p className='p-2 px-14  m-3 bg-blue-700 text-white shadow-lg shadow-blue-700 rounded-full'>Dashboard</p>
        <p className='p-2 px-10  m-3  bg-gray-700 text-white shadow-lg shadow-blue-300 rounded-full'>Users</p>
        <p className='p-2 px-4  m-3 bg-gray-700 text-white shadow-lg shadow-blue-300 rounded-full'>Manage Subscription</p>      </div>
    </div>
  )
}

export default Dashboard
