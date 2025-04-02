import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { authUser } from '../../redux/slices/authSlice'
import { useAuthInfo } from '../../hooks/useAuthInfo'
import Form from '../../components/SignIn/Form'
import './SignIn.scss'

const SignIn = () => {
    const [formData, setFormData] = useState({})
    const {token, messageAuth, isValid} = useAuthInfo()
    const navigate = useNavigate()
    const dispatch = useDispatch() 

    useEffect(() => {
        if(localStorage.getItem("token") != null){
            if(isValid){
                navigate("/dashboard")
            }
        }
    }, [])

    useEffect(() => {
        if(Object.keys(formData).length != 0){
            dispatch(authUser({email: formData.email, password: formData.password}))
        }
    }, [formData])

    useEffect(() => {
        if(isValid){
            if(formData.rememberme){
                localStorage.setItem("token", token) 
            }else{
                sessionStorage.setItem("token", token)
            }
            navigate("/dashboard")
        }
    }, [isValid])
    

    return <section className="sign-in">
        <Form errorMessage={messageAuth} onDataChange={setFormData}/>
    </section>
}
export default SignIn