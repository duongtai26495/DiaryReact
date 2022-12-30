import React, { useState } from 'react'
import { Snippet } from '../assets/snippets'
import { getAccessToken, loadUserLoginInfo } from '../api/functions'
import { ACCES_TOKEN, LOGIN_STATE, USER_LOCAL } from '../store/constants'
import { useStore } from '../store'
import { set_login_state } from '../store/actions'
import { Link } from 'react-router-dom'

const LoginForm = () => {
    const [state, dispatch] = useStore()
    const { list_diaries } = state
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")


    const loginWithUsernamePassword = async () => {
        var user = {
            username,
            password
        }

        const result = await getAccessToken(user)
        if (result.status == 200) {
            var access_token = result.data.access_token
            localStorage.setItem(ACCES_TOKEN, access_token)
            localStorage.setItem(LOGIN_STATE, true)
            var data = {
                username,
                access_token
            }
            const user = await loadUserLoginInfo(data)
            if (user.status === 'SUCCESS') {
                localStorage.setItem(USER_LOCAL, JSON.stringify(user.data))
                dispatch(set_login_state(true))
            }
        }
    }

    return (
        <div className='p-2 rounded-t border bg-white flex flex-col h-fit justify-around'>
            <p className='text-xl text-black font-bold text-center w-full'>{Snippet.WelcomeBack}</p>
            <label className='w-full p-1 text-xs' htmlFor='usernameForm' >{Snippet.UsernameForm}</label>
            <input className='w-full p-1 border rounded' id='usernameForm' value={username} onChange={(e) => setUsername(e.target.value)} placeholder={Snippet.UsernameForm} type={'text'} />
            <label className='w-full p-1 text-xs' htmlFor='passwordForm' >{Snippet.PasswordForm}</label>
            <input className='w-full p-1 border rounded' id='passwordForm' onChange={(e) => setPassword(e.target.value)} placeholder={Snippet.PasswordForm} type={'password'} />
            <button onClick={() => loginWithUsernamePassword()} className='w-full bg-white border shadow p-2 rounded my-2 text-black hover:bg-black hover:text-white transition-all'>{Snippet.LoginButton}</button>
            
      <Link className="my-2 text-base text-cyan-700" to={"/forgot"} >{Snippet.ForgetPassword}</Link>
        </div>
    )
}

export default LoginForm