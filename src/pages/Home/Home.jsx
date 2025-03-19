import useFetch from "../../hooks/useFetch.js"
import Hero from "../../components/Home/Hero/Hero"
import heroImage from '../../assets/bank-tree.jpeg'
import FeatureItem from "../../components/Home/FeatureItem/FeatureItem.jsx"
import './Home.scss'
function Home() {
  const { data } = useFetch({url: "./contentHomePage.json"})

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
