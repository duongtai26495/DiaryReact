import React, { useState } from 'react'
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'
import { Snippet } from '../assets/snippets'

const AuthenView = () => {

    const [authenSwitch, setSwitch] = useState(true)



    return (
        <div className='container'>
            <div className='w-1/4 shadow-md'>
                {
                    authenSwitch
                        ?
                        <LoginForm />
                        :
                        <RegisterForm />
                }
                <p className='w-full p-2 bg-black text-white rounded-b text-center cursor-pointer'
                    onClick={() => setSwitch(!authenSwitch)} >{authenSwitch ? Snippet.RegisterNow : Snippet.LoginNow}</p>
            </div>

        </div>
    )
}

export default AuthenView