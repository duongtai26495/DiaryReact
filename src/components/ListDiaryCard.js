import React, { useState } from 'react'
import DiaryCard from './DiaryCard'

const ListDiaryCard = ({diaries}) => {
 
  return (
    <div className='w-full columns-2 md:columns-3 lg:columns-4 gap-3'>
      {
        diaries ?
        diaries?.map((diary, index) => {
          return (<DiaryCard key={index} data={diary} />)
        })
        :
        "Chưa có nhật ký nào"
      }
    </div>

  )
}

export default ListDiaryCard