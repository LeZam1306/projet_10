import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { authUser } from '../../redux/slices/authSlice'
import { useAuthInfo } from '../../hooks/useAuthInfo'
import Form from '../../components/SignIn/Form'
import './SignIn.scss'

const SignIn = () => {
    const [formData, setFormData] = useState({})
    const {status, token, messageAuth, isValid} = useAuthInfo()
    const redirection = useNavigate()
    const dispatch = useDispatch() 

    useEffect(() => {
        if(Object.keys(formData).length != 0){
            dispatch(authUser({email: formData.email, password: formData.password}))
        }
    }, [formData])

    useEffect(() => {
        if(isValid){
            if(status === 200){
                localStorage.setItem("token", token)
                redirection("/dashboard")
            }
        }
    }, [isValid])
    

    return <section className="sign-in">
        <Form errorMessage={messageAuth} onDataChange={setFormData}/>
    </section>
}
export default SignIn