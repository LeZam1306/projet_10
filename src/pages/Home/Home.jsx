import { useEffect, useState } from "react"
import Hero from "../../components/Home/Hero/Hero"
import heroImage from '../../assets/bank-tree.jpeg'
import FeatureItem from "../../components/Home/FeatureItem/FeatureItem.jsx"
import iconChat from '../../assets/icon-chat.png'
import iconMoney from '../../assets/icon-money.png'
import iconSecurity from '../../assets/icon-security.png'
import './Home.scss'
function Home() {

  const [contentItem, setContentItem] = useState([])
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()
  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const icons = [iconChat, iconMoney, iconSecurity]
      try{
        const reponse = await fetch("/contentHomePage.json")
        const dataReponse = await reponse.json()
        dataReponse.items.map((e, index) => {
          setData(e.icon = icons[index])
        })
        setData(dataReponse)
      }catch(err){
        console.log(err)
        setError(true)
      }finally{
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return <>
    <Hero 
      img={heroImage}
      content={{
        title: "No fees. No minimum deposit. High interest rates.",
        subTitle: "Open a savings account with Argent Bank today!"
      }}
    />
    <section className="features">
      {data ? 
      data.items.map((e => {
        return <FeatureItem 
          key={e.id}
          icon={e.icon}
          title={e.title}
          text={e.text}
        />
      })) :  
      <p>Chargement</p>}
    </section>
  </>
}

export default Home
