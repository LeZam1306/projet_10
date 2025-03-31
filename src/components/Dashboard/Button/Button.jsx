import { Link } from "react-router"
import './Button.scss'

const Button = ({
    children,
    link = "/",
    type = "link",
    large = false,
    onClick = () => {}
}) => {

    switch(type){
        case "link":
            return( 
                <Link 
                    to={link} 
                    className={large ? "button large" : "button medium"}
                >
                    {children}
                </Link>
            )
        case "button":
            return(
                <button 
                    type={type} 
                    onClick={onClick}
                    className={large ? "button large" : "button medium"}
                >
                    {children}
                </button>
            )
    }

    
}

export default Button