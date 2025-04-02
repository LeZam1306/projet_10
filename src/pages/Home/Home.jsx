import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useUserInfo } from "../../hooks/useUserInfo.js"
import { useNavigate } from "react-router"
import { getUser, reset } from "../../redux/slices/userSlice.js"
import useFetch from "../../hooks/useFetch.js"
import Hero from "../../components/Home/Hero/Hero"
import heroImage from '../../assets/bank-tree.jpeg'
import FeatureItem from "../../components/Home/FeatureItem/FeatureItem.jsx"
import './Home.scss'
function Home() {
  const { data } = useFetch({url: "./contentHomePage.json"})
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { status } = useUserInfo()

  useEffect(() => {
    if(localStorage.getItem("token")){
      dispatch(getUser(localStorage.getItem("token")))
    }
  }, [])

  useEffect(() => {
    if (status === undefined || status === null) return
    if(status === 200){
      navigate("/dashboard")
    }
  }, [status])

  return <>
    <Hero 
      img={heroImage}
      content={{
        title: "No fees. No minimum deposit. High interest rates.",
        subTitle: "Open a savings account with Argent Bank today!"
      }}
    />
    <div></div>
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
