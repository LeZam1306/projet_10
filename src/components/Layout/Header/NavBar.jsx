import { Link, useNavigate } from "react-router"
import { useUserInfo } from "../../../hooks/useUserInfo"
import { useLocation} from "react-router"
import { useDispatch } from "react-redux"
import { logout } from "../../../redux/slices/authSlice"
import { reset } from "../../../redux/slices/userSlice"
import { LogOut, CircleUserRound } from "lucide-react"

const NavBar = () => {
    const { userName } = useUserInfo()
    const location = useLocation()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleClick = () => {
        dispatch(logout())
        dispatch(reset())
        localStorage.clear("token")
        sessionStorage.clear("token")
        setTimeout(()=>{}, 2000)
        navigate("/")
    }
    
    switch(location.pathname){
        case "/dashboard":
            return(
                <nav className='header__navBar'>
                    <div className='header__navBar--item'>
                        <CircleUserRound size={18}/>{userName}
                    </div>
                    <div onClick={handleClick} className='header__navBar--item'>
                        <LogOut size={18}/>Sign Out
                    </div>
                 </nav>
            )
        default:
            return(
                <nav className='header__navBar'>
                    <div>
                        <Link to="/sign-in"  className='header__navBar--item'>
                            <CircleUserRound size={18}/>SignIn
                        </Link>
                    </div>
                </nav>
            )
    }
    
}

export default NavBar