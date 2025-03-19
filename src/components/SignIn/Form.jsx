import { CircleUserRound } from "lucide-react"
import './Form.scss'

const Form = () => {
    return <section className="windowForm">
        <CircleUserRound size={18}/>
        <h1 className="windowForm__title">Sign In</h1>
        <form className="windowForm__form">
            <div className="windowForm__form--text">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" />
            </div>
            <div className="windowForm__form--text">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
            </div>
            <div className="windowForm__form--checkbox">
                <input type="checkbox" id="rememberme" />
                <label htmlFor="checkbox">Remember me</label>
            </div>
            <button type="submite">Sign In</button>
        </form>
    </section>
}

export default Form