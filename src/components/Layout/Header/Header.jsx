import { Link } from 'react-router'
import { CircleUserRound } from 'lucide-react'
import logo from '../../../assets/argentBankLogo.png'
import './Header.scss'

const Header = () => {

    return <header className='header'>
        <img src={logo} 
            className='header__logo' 
            alt='logo de ArgentBank'
        />
        <nav className='header__navBar'>
            <Link to="/sign-in">
                <CircleUserRound size={18}/>Sign-In
            </Link>
        </nav>
    </header>
}

export default Header