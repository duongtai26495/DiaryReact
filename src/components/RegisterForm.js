import React, { useState, useEffect } from 'react'
import { Snippet } from '../assets/snippets'
import { Link, useNavigate } from 'react-router-dom'
import { registerNewAccount } from '../api/functions'


const RegisterForm = () => {

  const navigate = useNavigate()
  const [full_name, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [gender, setGender] = useState(3)
  const [statusHandle, setStatusHandle] = useState("")
  const [loading, setLoading] = useState(false)

  const registerAccount = async () => {
    setLoading(true)
    var User = {
      full_name,
      username,
      email,
      password,
      gender
    }
    const result = await registerNewAccount(User)
    if(result.status == 200){
      navigate("/")
      setLoading(false)
    }else{
      setLoading(false)
      setStatusHandle(Snippet.REGISTERFAIL)
    }
  }

  var genderSelector = [
    { name: "Nam" },
    { name: "Nữ" },
    { name: "Chưa xác định" }
  ]

  return (
    <div className='p-2 rounded-t border bg-white flex flex-col h-fit justify-around'>
      <p className='text-xl text-black font-bold text-center w-full'>{Snippet.RegisterAccount}</p>

      <label className='mt-2 w-full p-1 text-xs' htmlFor='fullNameForm' >{Snippet.FullNameForm}</label>
      <input className='w-full p-1 border rounded' placeholder={Snippet.FullNameForm} id='fullNameForm' value={full_name}
        onChange={(e) => setFullName(e.target.value)} />

      <label className='mt-2 w-full p-1 text-xs' htmlFor='emailForm' >{Snippet.EmailForm}</label>
      <input className='w-full p-1 border rounded' placeholder={Snippet.EmailForm} id='emailForm' value={email}
        onChange={(e) => setEmail(e.target.value)} />

      <label className='mt-2 w-full p-1 text-xs' htmlFor='usernameForm' >{Snippet.UsernameForm}</label>
      <input className='w-full p-1 border rounded' id='usernameForm' value={username}
        onChange={(e) => setUsername(e.target.value)} placeholder={Snippet.UsernameForm} type={'text'} />

      <label className='mt-2 w-full p-1 text-xs' htmlFor='passwordForm' >{Snippet.PasswordForm}</label>
      <input className='w-full p-1 border rounded' id='passwordForm'
        onChange={(e) => setPassword(e.target.value)} placeholder={Snippet.PasswordForm} type={'password'} />

      <label className='mt-2 w-full p-1 text-xs' htmlFor='passwordForm' >{Snippet.GenderForm}</label>
      <select id='category' className='w-full p-2 border bg-slate-200 rounded mb-2' value={gender} onChange={(e) => setGender(e.target.value)}>
        <option hidden >{loading ? Snippet.Loading : Snippet.SelectGender}</option>
        {
          genderSelector?.map((gender, index) => {
            return (
              <option key={index} value={++index} >{gender.name}</option>
            )
          })
        }
      </select>
      <button onClick={() => registerAccount()}
        className='w-full bg-white border shadow p-2 rounded my-2 text-black hover:bg-black hover:text-white transition-all'>
        {Snippet.RegisterButton}
      </button>
      {
        statusHandle !== "" &&
        <p className='my-2 text-red-600 text-base'><em>{statusHandle}</em></p>
      }
    </div>
  )
}

export default RegisterForm