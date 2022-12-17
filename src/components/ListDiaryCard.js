import React from 'react'
import { useStore } from '../store'
import DiaryCard from './DiaryCard'

const ListDiaryCard = () => {
    const [state] = useStore()
    const { list_diaries } = state
  
  return (
    <div className='w-full columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-3'>
    {list_diaries?.map((diary, index)=>{
        return (<DiaryCard key={index} data={diary} />)
    })}
    </div>
    
  )
}

export default ListDiaryCard