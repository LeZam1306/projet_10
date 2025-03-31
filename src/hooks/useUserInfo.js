import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

export const useUserInfo = () => {
    const userInfo = useSelector((state) => state.user.user)
    const [status, setStatus] = useState(null)
    const [email, setEmail] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [userName, setUserName] = useState("")
    const [messageError, setMessageError] = useState("")

    useEffect(() => {
        if(!userInfo) return

        if(userInfo.status != 200){
            setStatus(userInfo.status)
            setMessageError(userInfo.message)
        }else{
            setStatus(userInfo.status)
            setEmail(userInfo.body.email)
            setFirstName(userInfo.body.firstName)
            setLastName(userInfo.body.lastName)
            setUserName(userInfo.body.userName)
        }
    }, [userInfo])
    

    return ({
        status,
        email,
        firstName,
        lastName,
        userName,
        messageError
    })
}