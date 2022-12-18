import React, { useState } from 'react'
import { Snippet } from '../assets/snippets'
import { useStore } from '../store'
import { loadSearchResult } from '../api/functions'
import { load_search_result } from '../store/actions'
import { Link, useNavigate } from 'react-router-dom'

const SearchBar = () => {
    const [state, dispatch] = useStore()
    const [keyword, setKeyword] = useState("")
    const navigate = useNavigate()


    const searchPage = async () => {
        if(keyword !== "" ){
            const result = await loadSearchResult(keyword);
            dispatch(load_search_result(result))
            setKeyword("")
            navigate("/search/result")
        }
    }
  return (
    <div className='search-bar hidden md:flex md:w-1/3 '>
        <div className='w-full search-form border-2 rounded overflow-hidden flex flex-row'>
            <input value={keyword} className='p-2 w-full' placeholder={Snippet.SearchPlaceholder} onChange={e => setKeyword(e.target.value)} />
            <p onClick={()=> searchPage()} className='cursor-pointer border-l w-1/5 flex flex-row justify-center items-center hover:bg-black hover:text-white transition-all'>{Snippet.Search}</p>
        </div>
    </div>
  )
}

export default SearchBar