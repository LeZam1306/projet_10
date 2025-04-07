import { useState } from "react"
import PropTypes from "prop-types"
import { useUserInfo } from "../../../hooks/useUserInfo"
import { useDispatch } from "react-redux"
import { changeUsernameAPI } from '../../../services/APIchangeUserName'
import { changeUsername } from '../../../redux/slices/userSlice'
import Button from "../Button/Button"
import './FormUserName.scss'

const FormUserName = ({
   onClose = () => {}
}) => {
    const {userName, firstName, lastName} = useUserInfo()
    const [userNameForm, setUserNameForm] = useState(userName)
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    
    const handleChange = (e) => {
        setUserNameForm(e.target.value)
    }
    const handleClick = () => {
        onClose()
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await changeUsernameAPI(
            {userName: userNameForm}, 
            localStorage.getItem("token") ? localStorage.getItem("token") : sessionStorage.getItem("token")
        )
        if(response?.status === 200){
            dispatch((changeUsername(userNameForm)))
        }else{
            setError("Une erreur c'est produite")
        }
        onClose()
    }

    return <form 
            onSubmit={handleSubmit} 
            className="formUserChange"
        >
        <p>{error}</p>
        <div className="formUserChange__input">
            <label htmlFor="userName">User Name:</label>
            <input 
                id="userName"
                name="userName"
                type="text" 
                value={userNameForm}
                onChange={handleChange}  
            />
        </div>
        <div className="formUserChange__input">
            <label>First Name:</label>
            <input 
                type="text" 
                value={firstName}  
                readOnly
            />
        </div>
        <div className="formUserChange__input">
            <label>Last Name:</label>
            <input 
                type="text" 
                value={lastName}
                readOnly
            />
        </div>
        <div className="formUserChange__buttons">
            <Button 
                type="submit"
                onClick={handleSubmit}
                disable={userNameForm === "" ? true : false}
            >
                Save
            </Button>
            <Button
                type="button" 
                onClick={handleClick}
            >
                Cancel
            </Button>
        </div>
    </form>
}

FormUserName.propTypes = {
    onClose: PropTypes.func
}

export default FormUserName