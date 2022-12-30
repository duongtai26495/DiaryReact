import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { activeUserByKey } from '../api/functions'
import { useStore } from '../store'

const ActiveUser = () => {

  const [state, dispatch] = useStore()
    const {key} = useParams()

    useEffect(()=>{
        console.log("KEY: ",key)
        const activeUser = async () => {
            const result = await activeUserByKey(key);
    
            console.log(result)
        }

        activeUser()
    },[])

  return (
    <div>User active success</div>
  )
}

export default ActiveUser