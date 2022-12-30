import React, { useEffect, useState } from 'react'
import AuthenView from '../components/AuthenView'
import { LOGIN_STATE } from '../store/constants'
import ProfileView from '../components/ProfileView'

const AuthenPage = () => {

    useEffect(()=>{ 
    },[localStorage.getItem(LOGIN_STATE)])

    return (
        <div className='w-full'>
            {
                localStorage.getItem(LOGIN_STATE) ?
                    <ProfileView />
                    :
                    <AuthenView />
            }
        </div>
    )
}

export default AuthenPage