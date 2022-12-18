import React from 'react'
import ListDiaryCard from '../components/ListDiaryCard'
import { useStore } from '../store'
import CategorySidebar from '../components/CategorySidebar'

const HomePage = () => {

  const [state, dispatch] = useStore()
  const { list_diaries } = state
  return (
    <>
      <div className='hidden lg:block w-1/3'>
        <CategorySidebar />
      </div>
      <ListDiaryCard diaries={list_diaries} />
    </>
  )
}

export default HomePage