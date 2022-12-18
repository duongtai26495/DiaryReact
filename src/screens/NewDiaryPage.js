import React, { useState, useEffect } from 'react'
import { Snippet } from '../assets/snippets'
import Editor from '@codifytools/react-text-editor';
import { useStore } from '../store';

const NewDiaryPage = () => {

  const [state, dispatch] = useStore()
  const { list_categories } = state
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [categories, setCategories] = useState([])
  const [category, setCategory] = useState("")
  const [selectedImage, setSelectedImage] = useState()

  useEffect(() => {


    return (() => {


    })
  }, [selectedImage])

  const addCategory = () => {
    if (category && categories.length < 3) {
      var check = false
      categories.forEach(cate => {
        if (cate.id === category) {
          check = true
        }
      });
      if (check == false) {
        var cate = {
          "id": category
        }
        var selectCate = list_categories.filter(p => p.id === cate.id)
        setCategories([...categories, selectCate[0]])
      }

    }
  }

  const removeCategory = (id) => {
    var result = categories.filter(cate => cate.id !== id)
    setCategories(result)
  }


  const submitDiary = async () => {
    console.log(title, content, categories)
  }
  return (
    <div className='w-full shadow-xl rounded-md bg-white p-2 flex flex-col md:flex-row gap-2'>
      <div className='w-full md:w-2/3 border p-2'>
        <p className='text-xl font-bold my-2'>{Snippet.NEWDIARY}</p>

        <input placeholder={Snippet.TITLE} value={title} onChange={e => setTitle(e.target.value)} className="w-full p-2 border rounded-md bg-slate-200" />

        <Editor
          field="text"
          html={content}
          classes="w-full my-2"
          saveCallback={(e) => setContent(e.target.value)}
          placeholder={Snippet.CONTENT}
        />

        <button className='w-full p-2 bg-black text-white rounded-md' onClick={() => submitDiary()} >{Snippet.SubmitDiary}</button>
      </div>
      <div className='w-full md:w-1/3 shadow p-2'>
        <label htmlFor='category my-1'>{Snippet.Category} : </label>
        <div className='w-full flex flex-row gap-2'>
          <select id='category' className='w-full p-2 border bg-slate-200 rounded mb-2' value={category} onChange={(e) => setCategory(e.target.value)}>
          <option hidden >{Snippet.SelectCategory}</option>
            {
              list_categories &&
              list_categories?.map((cate, index) => {
                return (
                  <option key={index} value={cate.id} >{cate.name}</option>
                )
              })
            }
          </select>
          <button onClick={() => addCategory()} className='w-fit h-fit border bg-black text-white p-2 rounded'>{Snippet.ADD}</button>
        </div>

        {
          categories.length > 0 &&
          <div className='w-full flex flex-row flex-wrap border rounded-md'>
          {
          categories?.map((cate, index)=>{
            return(
            <p className='p-2 border rounded-md bg-white m-1 w-fit ' key={index}>{cate.name}
              <span onClick={() => removeCategory(cate.id)} className='ml-1 text-red-300 hover:text-red-600 cursor-pointer transition-all'>X</span>
            </p>
            )
          })
          }
            </div>
        }

      </div>
    </div>
  )
}

export default NewDiaryPage