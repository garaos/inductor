import { useNav } from "../hooks/useNav"
import induct3 from '../img/inductor-03.png'


const About = () => {
  const aboutRef = useNav("Nosotros")

  return (
    <section ref={aboutRef} id="nosotrosSection" className="secondary-section">
      <div className="row">
        <div className="col-lg-4 p-5" data-aos="fade-right">
          <img src={induct3} className="img-fluid gonme pt-5" alt="Gon" />
        </div>
        <div className="col-lg-8 pt-4 px-5 pt-lg-0 content" data-aos="fade-left">
          <h2 className="abt-me">Nosotros</h2>
          <h3 className="pt-3">Ingenieros Civiles Electronicos</h3>
          <p className="fst-italic">
         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis sed eius nihil quo, recusandae fugit accusamus repellat at placeat reprehenderit voluptatum sit voluptate, omnis esse earum cum sunt vitae dolore..
          </p>
          <div className="row">
            <div className="col-lg-6">
              <ul>
                <li><i className="fa-solid fa-circle-chevron-right"></i><strong> 1:</strong> <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, quod pariatur. Delectus eligendi omnis, illo perferendis obcaecati voluptate debitis aliquam praesentium, nesciunt asperiores hic alias animi veniam voluptatem rem minima.</span></li>
                <li><i className="fa-solid fa-circle-chevron-right"></i><strong> 2:</strong> <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam fugit, quibusdam unde ullam incidunt cumque est ut error harum similique dolores ipsum vel laborum a soluta eos expedita assumenda iusto.</span></li>
              </ul>
            </div>
            <div className="col-lg-6">
              <ul>
                <li><i className="fa-solid fa-circle-chevron-right"></i><strong> 3:</strong> <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. A veniam aspernatur repudiandae deleniti quod libero nisi iure. Atque dolorum, placeat corporis excepturi eum consectetur magni, recusandae, fugit earum laudantium hic?</span></li>
                <li><i className="fa-solid fa-circle-chevron-right"></i><strong> 4:</strong> <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo perferendis molestiae, enim natus quisquam amet eveniet exercitationem soluta voluptates suscipit ad ipsam saepe deleniti quis tenetur. Architecto incidunt nihil dignissimos?</span></li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About