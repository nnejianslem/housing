import React, { useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged } from "firebase/auth";

export function useAuthStatus() {
    const [loggedIn, setLoggedIn] = useState (false)
    const [checkingStatus, SetCheckingStatus] = useState(true)

    useEffect(()=>{
        const auth = getAuth()
        onAuthStateChanged(auth, (user)=>{
            if(user){
                setLoggedIn(true)
            }
            SetCheckingStatus(false)
        })
    }, [])

  return { loggedIn, checkingStatus }
}
