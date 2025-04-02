import { Link } from "react-router"
import './Button.scss'

const Button = ({
    children,
    link = "/",
    type = "link",
    large = false,
    disable = false,
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
                    disabled={disable}
                >
                    {children}
                </button>
            )
        case "submit":
            return(
                <button
                    type={type}
                    onSubmit={onClick}
                    className={large ? "button large" : "button medium"}
                    disabled={disable}
                >
                    {children}
                </button>
            )
    }

    
}

export default Button