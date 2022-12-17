import React from 'react'
import { Link } from 'react-router-dom'

const TopHeader = () => {
  return (
    <div className='w-full p-2 bg-white shadow mb-3 sticky top-0 z-50 '>
      <div className='container m-auto flex flex-row items-center justify-between'>
        <h1 className='text-2xl font-bold '><Link to={"/"}>Diary</Link></h1>
        <ul className='flex flex-row items-center justify-between'>
          <li className='bg-white text-black hover:bg-black hover:text-white p-2 rounded transition-all'><Link to={"/"}>Home</Link></li>
          <li className='bg-white text-black hover:bg-black hover:text-white p-2 rounded transition-all'><Link >Category</Link></li>
          <li className='bg-white text-black hover:bg-black hover:text-white p-2 rounded transition-all'><Link >Contact Us</Link></li>
          <li className='bg-white text-black hover:bg-black hover:text-white p-2 rounded transition-all'><Link >Account</Link></li>

        </ul>
      </div>
    </div>
  )
}

export default TopHeader