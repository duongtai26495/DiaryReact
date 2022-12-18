
import React from 'react'
import { Link } from 'react-router-dom' 
import { Snippet } from '../assets/snippets'
import { useStore } from '../store'

const CategorySidebar = ({id}) => {

    const [state, dispatch] = useStore()
    const {list_categories } = state
  return (
    <div className='flex flex-col h-fit shadow p-2 hover:shadow-lg transition-all'>
    <p className='text-base p-2 mb-2 border-b'>{Snippet.Category} :</p>
    {
        list_categories.length > 0 &&
        list_categories?.map((category, index) => {
            return (
                <Link to={"/category/id=" + category.id} key={index} className={`w-full p-2 my-1 rounded-md font-bold  bg-white text-black hover:bg-black hover:text-white transition-all ${id === category.id && 'bg-black text-white'}`}>{category.name}</Link>
            )
        })
    }
</div>
  )
}

export default CategorySidebar