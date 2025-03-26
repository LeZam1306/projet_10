import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

export const useAuthInfo = () => {
    const authInfo = useSelector((state) => state.auth.token)
    const [messageAuth, setMessageAuth] = useState("")
    const [status, setStatus] = useState()
    const [token, setToken] = useState()
    const [isValid, setIsValid] = useState(false)

    useEffect(() => {
        if(Object.keys(authInfo).length != 0){
            if(authInfo.status === 200){
                setToken(authInfo.body.token)
                setIsValid(true)
            }else if(isValid){
                setIsValid(false)
            }
            setStatus(authInfo.status)
            setMessageAuth(authInfo.message) 
        }
    }, [authInfo])

    return { 
        isValid,
        messageAuth, 
        status, 
        token 
    }
}