import { Link } from "lucide-react"
import './Button.scss'

const Button = ({
    children,
    link = "/"
}) => {

    return <Link to={link} className="button">
        {children}
    </Link>
}

export default Button