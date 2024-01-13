import { useNav } from "../hooks/useNav"
import induct3 from '../img/inductor-03.png'


const Footer = () => {
  const contactRef = useNav("Contacto")

  return (
    <section ref={contactRef} id="contactoSection">
      <h2>Contacto</h2>

      <div className="row pt-3">
        <div className="col-lg-4 px-5" data-aos="fade-right">
          <a href="https://www.inductor.cl" className="text-reset" target="_blank" rel="noopener noreferrer">  <img src={induct3} className="img-fluid goncont" alt="Gon" /></a>
        </div>
        <div className="col-lg-8 pt-lg-0 content" data-aos="fade-left">
          <div className="row pt-5">
            <div className="col-lg-6 px-5">
              <ul>
                <li><a href="mailto:info@inductor.cl" className="text-reset"><i className="fa-solid fa-envelope mailcont"></i></a></li>
              </ul>
            </div>
            <div className="col-lg-6 px-5">
              <ul>
                <li><a href="https://www.linkedin.com" className="text-reset" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin gitcont"></i></a></li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Footer