import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { loadDiaryById } from '../api/functions'
import { HOST_URL } from '../assets/constants/api-constants'
import { Snippet } from '../assets/snippets'
import CategorySidebar from '../components/CategorySidebar'
import CategoryBadge from '../components/CategoryBadge'
import { useStore } from '../store'
import { load_search_result } from '../store/actions'

const DiaryPage = () => {

    const [state, dispatch] = useStore()

    const { id } = useParams()
    const [diary, setDiary] = useState({})
    const [comments, setComments] = useState([])
    const [author, setAuthor] = useState({})
    const [categories, setCategories] = useState([])
    
    useEffect(() => {
        
        dispatch(load_search_result([]))
        const loadDiary = async () => {
            if (id) {
                const result = await loadDiaryById(id)
                setDiary(result.diary)
                setComments(result.comment.content)
                setAuthor(result.diary.author)
                setCategories(result.diary.categories)
            }
        }


        loadDiary()
    }, []) 

    return (
        <div className='container m-auto columns-1 md:columns-2 gap-3 flex flex-col md:flex-row'>
            <div className='hidden lg:block w-1/4'>
                <CategorySidebar />
            </div>
            <div className='w-full md:w-3/4 xl:w-2/4 bg-white rounded-md shadow-md flex flex-col overflow-hidden'>
                <img className='w-full feature-image-diary' src={HOST_URL + "image/" + diary.image_url} />
                <div className='flex flex w-full p-2'>
                {
                    categories.length > 0 &&
                    categories.map((category, index)=>{
                        return(
                            <CategoryBadge category={category} key={index} />
                        )
                    })
                }
                </div>

                <div className='w-full  px-10 py-5'>
                    <p className='w-full text-xl font-bold'>{diary.title}</p>
                    <div className='card-content text-sm my-2' dangerouslySetInnerHTML={{ __html: diary.content }}></div>
                    {
                        comments.length > 0 &&
                        comments?.map((comment, index) => {
                            return (
                                <p className='' key={index} dangerouslySetInnerHTML={{ __html: comment.content }}></p>
                            )
                        })
                    }
                </div>

            </div>
            <div className='w-full h-fit md:w-1/4 p-2 bg-white rounded-md shadow flex flex-row sticky top-16'>
                <Link to={"/"} className="flex flex-row justify-start items-center ">
                    <img src={HOST_URL + "image/profile/" + author.profile_image} className="diary-author-image" />
                    <p className='p-2 text-md'><strong>{Snippet.Author}: </strong><br />{author.full_name}</p>
                </Link>
            </div>
        </div>
    )
}

export default DiaryPage