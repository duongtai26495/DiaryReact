import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { loadDiaryByCategory } from '../api/functions';
import ListDiaryCard from '../components/ListDiaryCard';
import CategorySidebar from '../components/CategorySidebar';

const CategoryPage = () => {

  var { id } = useParams()
  const [diaries, setDiaries] = useState([])
  useEffect(() => {
    const loadDiaries = async () => {
      if (id) {
        const result = await loadDiaryByCategory(id);
        result && setDiaries(result.content)
      }
    }
    loadDiaries()

    return (() => {
      setDiaries([])
    })
  }, [id])

  return (
    <div className='w-full flex flex-row gap-3'>
      <div className='hidden lg:block w-1/3'>
        <CategorySidebar id={id} />
      </div>
      {
        diaries.length > 0 ?
          <ListDiaryCard diaries={diaries} />
          :
          <div className='w-full columns-2 md:columns-3 lg:columns-4 gap-3'>
            Chưa có nhật ký nào
          </div>
      }
    </div>
  )
}

export default CategoryPage