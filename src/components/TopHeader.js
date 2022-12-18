import React from 'react'
import { Link } from 'react-router-dom'
import { Snippet } from '../assets/snippets'
import SearchBar from './SearchBar'

const TopHeader = () => {
  return (
    <div className='w-full p-2 bg-white shadow mb-3 sticky top-0 z-50'>
      <div className='container m-auto flex flex-row items-center justify-between relative'>
        <h1 className='text-2xl font-bold '><Link to={"/"}>{Snippet.APP_NAME}</Link></h1>
        <SearchBar />
        <ul className='flex flex-row items-center justify-between'>
          <li className='bg-white text-black hover:bg-black hover:text-white p-2 rounded transition-all'><Link to={"/"}>{Snippet.HomePage}</Link></li>
          <li className='bg-white text-black hover:bg-black hover:text-white p-2 rounded transition-all'><Link >{Snippet.Category}</Link></li>
          <li className='bg-white text-black hover:bg-black hover:text-white p-2 rounded transition-all'><Link >{Snippet.Contact}</Link></li>
          <li className='bg-white text-black hover:bg-black hover:text-white p-2 rounded transition-all'><Link to={"/authen"} >{Snippet.Account}</Link></li>
        </ul>
      
      </div>

    </div>
  )
}

export default TopHeader