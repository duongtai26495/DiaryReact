import React from 'react'
import { useStore } from '../store'
import ListDiaryCard from '../components/ListDiaryCard' 
import CategorySidebar from '../components/CategorySidebar'

const ResultSearchPage = () => {
    const [state, dispatch] = useStore()
    const { list_search_result} = state 

  
  return (
    <div className='w-full flex flex-row gap-3'>
          <div className='hidden lg:block w-1/4'>
                <CategorySidebar />
            </div>
            <ListDiaryCard diaries={list_search_result.content} />
    </div>
  )
}

export default ResultSearchPage