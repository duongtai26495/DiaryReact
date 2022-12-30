import React,{useEffect} from 'react'
import { Snippet } from '../assets/snippets'
import { signOut } from '../api/functions'
import { set_login_state } from '../store/actions'
import { useStore } from '../store'

const ProfileView = () => {
     
  const [state, dispatch] = useStore()
  const {login_sate} = state
  useEffect(()=>{

  },[login_sate])

  const userLogout = () => {
    signOut()
    dispatch(set_login_state(false))
  }
  return (
    <div>
      <button onClick={()=> userLogout()}>{Snippet.SignOut}</button>
    </div>
  )
}

export default ProfileView