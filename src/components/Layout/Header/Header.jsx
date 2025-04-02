import { Link, useLocation } from 'react-router'
import NavBar from './NavBar'
import logo from '../../../assets/argentBankLogo.png'
import './Header.scss'

const Header = () => {
    const location = useLocation()

    return <header className='header'>
        <Link to={location.pathname === "/dashboard" ? "#" : "/"}>
            <img src={logo} 
                className='header__logo' 
                alt='logo de ArgentBank'
            />
        </Link>
        <NavBar/>    
    </header>
}

export default Header