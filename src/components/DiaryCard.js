import React from 'react'
import { Link } from 'react-router-dom'
import { HOST_URL } from '../assets/constants/api-constants'
import { Snippet } from '../assets/snippets'

const DiaryCard = ({data}) => {

  var diary = {
    id: data.id,
    image_url : HOST_URL+"image/"+ data.image_url,
    title : data.title,
    content : data.content,
    last_edited: data.last_edited
  }

  var author = {
    full_name: data.author.full_name,
    profile_image : HOST_URL+"image/profile/"+ data.author.profile_image
  }

  
  
  return (
    <div className='bg-white diary-card box border mb-3 rounded-lg cursor-pointer shadow-sm hover:shadow-md overflow-hidden'>
    <Link to={"/diary/id="+diary.id} data={diary}>
    <img src={diary.image_url} className="w-full diary-image-wrapper relative" />
    <div className='w-full p-3 flex flex-col'>
    <p className='text-sm font-bold text-slate-600'>{diary.title}</p>
    <div className='card-content text-sm mt-2' dangerouslySetInnerHTML={{ __html: diary.content?.length > 100 ? diary.content?.slice(0, 100) + '...' : diary.content }}>
          </div>
          {
            diary.content?.length > 100
              &&
              <span className='text-sm text-cyan-700'><em>... {Snippet.readMore}</em></span>
          }
    </div>
    <div className='p-3 flex flex-row justify-start items-center w-full'>
        <div className='diary-card-author-image' style={{backgroundImage: `url(${author.profile_image})`}}></div>
        <div className='p-2 flex-col'>
          <p className='text-sm font-bold'>{author.full_name}</p>
          <p className='text-xs text-gray-500'><em>{diary.last_edited}</em></p>
        </div>
    </div>
    </Link>
    
    </div>
  )
}

export default DiaryCard