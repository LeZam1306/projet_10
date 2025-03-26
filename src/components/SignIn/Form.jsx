import { useEffect, useState } from "react"
import { CircleUserRound } from "lucide-react"
import './Form.scss'

const Form = ({
    onDataChange = () => {},
    errorMessage = ""
}) => {
    const [formData, setFormData] = useState({})
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [remember, setRemember] = useState(false)

    useEffect(() => {
        if(Object.keys(formData).length != 0){
            onDataChange(formData)
        }
    }, [formData])

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormData({
            email: email,
            password: password,
            rememberme: remember
        })
    }
    
    return <section className="windowForm">
        <CircleUserRound size={18}/>
        <h1 className="windowForm__title">Sign In</h1>
        <form onSubmit={handleSubmit} className="windowForm__form">
            <p className="">{errorMessage}</p>
            <div className="windowForm__form--text">
                <label htmlFor="email">Email</label>
                <input 
                    onChange={(e) => setEmail(e.target.value)}
                    type="text" 
                    id="email" 
                    value={email}
                />
            </div>
            <div className="windowForm__form--text">
                <label htmlFor="password">Password</label>
                <input 
                    onChange={(e) => {setPassword(e.target.value)}} 
                    type="password" 
                    id="password" 
                    value={password}
                />
            </div>
            <div className="windowForm__form--checkbox">
                <input 
                    checked={remember}
                    onChange={() => setRemember(!remember)}
                    type="checkbox" 
                    id="rememberme" 
                />
                <label htmlFor="rememberme">Remember me</label>
            </div>
            <button type="submit">Sign In</button>
        </form>
    </section>
}

export default Form