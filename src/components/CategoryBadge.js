import React from 'react'
import { Link } from 'react-router-dom'

const CategoryBadge = ({ category }) => {
    return (
        <Link to={"/category/id="+category.id} className='
        border-red-500 
        border 
        text-red-500 
        category-tag 
        px-2 py-1 mx-2 
        text-sm 
        rounded-full 
        hover:text-white 
        hover:bg-red-500 
        font-bold 
        transition-all 
        shawdow'>
            {category.name}
        </Link>
    )
}

export default CategoryBadge