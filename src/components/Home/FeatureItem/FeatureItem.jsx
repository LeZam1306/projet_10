import PropTypes from "prop-types"
import './FeatureItem.scss'

const FeatureItem = ({
        icon = "https://placehold.co/1240x1080",
        title = "Titre",
        text
    }) => {
    return <article className="feature-item">
        <img 
            className="feature-item__icon"
            src={icon} 
            alt={icon}
        />
        <h2 className="feature-item__title">{title}</h2>
        <p className="feature-item__text">{text}</p>
    </article>
}

FeatureItem.protoTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    paragraph: PropTypes.string
}

export default FeatureItem