import PropTypes from "prop-types"
import { useState, useEffect } from "react"
import './Hero.scss'

const Hero = ({img = "https://placehold.co/1240x1080", content}) => {
    
    const [title, setTitle] = useState([])

    useEffect(() => {
        if (content.title.includes(".")){
            let newTitle = content.title.split(".")
            newTitle.pop()
            newTitle = newTitle.map(e => {return(e + ".")})
            setTitle(newTitle)
        }else{
            setTitle(content.title)
        }
    }, [content.title])
    
    return <section className="hero">
        <img 
            className="hero__background"
            src={img} 
            alt="Image du héros de la page représentant un ver avec des pièces et une plante."
        />
        <div className="hero__textContent">
            <h1>{
                title.map((e) => {
                    return <span key={e}>
                        {e}<br/>
                    </span>
                })
            }</h1>
            <p>{content.subTitle}</p>
        </div>
    </section>
}

Hero.propTypes = {
    img: PropTypes.string.isRequired,
    content: PropTypes.shape({
        title: PropTypes.string.isRequired,
        subTitle: PropTypes.string.isRequired
    })
}

export default Hero