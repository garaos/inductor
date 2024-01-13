import { useNav } from "../hooks/useNav"
import induct3 from '../img/inductor-03.png'

const Home = () => {
  const homeRef = useNav("Home")

  return (
    <section ref={homeRef} id="homeSection">
      <img src={induct3} alt="gon" className="pt-5 gon" />
      <h2>Inductor</h2>
      <p className="p-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo beatae, aperiam unde similique doloribus error distinctio sed repudiandae voluptatibus enim dignissimos officia alias perspiciatis sit nam sunt minus quisquam delectus.</p>
    </section>
  )
}

export default Home