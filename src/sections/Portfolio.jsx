import { useNav } from "../hooks/useNav"
import { Card } from "react-bootstrap"
import Container from 'react-bootstrap/Container';

import Pro1 from "../img/portfolio/01-large.jpg"
import Pro2 from "../img/portfolio/02-large.jpg"
import Pro3 from "../img/portfolio/03-large.jpg"
import Pro4 from "../img/portfolio/04-large.jpg"



const Portfolio = () => {
  const portfolioRef = useNav("Proyectos")

  return (
    <section ref={portfolioRef} id="proyectosSection" className="secondary-section pt-5">
      <h2 className="pt-5">Proyectos</h2>
      <div className=" container text-center pt-3">
        <div className="row">

          <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center pb-1 mb-3">
            <div style={{ width: '18rem' }} className="rounded shadow mb-5">
              <h4 className="pt-2 text-black-50 fw-bolder">P1</h4>
              <Card.Img variant="top" src={Pro1} className="w-100 pb-2" />
              <Card.Body className="row pb-3">
                <div className="d-flex justify-content-start align-items-end h-100">
                  <h5><span className="badge bg-secondary ms-2">html</span><span className="badge bg-secondary ms-2">css</span><span className="badge bg-secondary ms-2">bootstrap</span></h5>
                </div>
                <Container className="mt-5">
                  <Card.Link href="https://proyect-1-udd-lp.netlify.app" className="text-reset col-8 fs-3 px-2" target="_blank" rel="noopener noreferrer">
                    <i class="fa-solid fa-link"></i>
                  </Card.Link>
                </Container>
              </Card.Body>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center pb-1 mb-3">
            <div style={{ width: '18rem' }} className="rounded shadow mb-5">
              <h4 className="pt-2 text-black-50 fw-bolder">P2</h4>
              <Card.Img variant="top" src={Pro2} className="w-100 pb-2" />
              <Card.Body className="row pb-3">
                <div className="d-flex justify-content-start align-items-end h-100">
                  <h5><span className="badge bg-secondary ms-2">html</span><span className="badge bg-secondary ms-2">css</span><span className="badge bg-secondary ms-2">js</span><span className="badge bg-secondary ms-2">bootstrap</span></h5>
                </div>
                <Container className="mt-5">
                  <Card.Link href="https://garaos.github.io/proyecto2/" className="text-reset col-8 fs-3 px-2" target="_blank" rel="noopener noreferrer">
                    <i class="fa-solid fa-link"></i>
                  </Card.Link>
                </Container>
              </Card.Body>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center pb-1 mb-3">
            <div style={{ width: '18rem' }} className="rounded shadow mb-5">
              <h4 className="pt-2 text-black-50 fw-bolder">P3</h4>
              <Card.Img variant="top" src={Pro3} className="w-100 pb-2" />
              <Card.Body className="row pb-3">
                <div className="d-flex justify-content-start align-items-end h-100">
                  <h5><span className="badge bg-secondary ms-2">html</span><span className="badge bg-secondary ms-2">css</span><span className="badge bg-secondary ms-2">js</span><span className="badge bg-secondary ms-2">axios</span><span className="badge bg-secondary ms-2">bootstrap</span></h5>
                </div>
                <Container className="mt-3">
                  <Card.Link href="https://garaos.github.io/proyecto3/" className="text-reset col-8 fs-3 px-2" target="_blank" rel="noopener noreferrer">
                    <i class="fa-solid fa-link"></i>
                  </Card.Link>
                </Container>
              </Card.Body>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center pb-1 mb-3">
            <div style={{ width: '18rem' }} className="rounded shadow mb-5">
              <h4 className="pt-2 text-black-50 fw-bolder">P4</h4>
              <Card.Img variant="top" src={Pro4} className="w-100 pb-2" />
              <Card.Body className="row pb-3">
                <div className="d-flex justify-content-start align-items-end h-100">
                  <h5><span className="badge bg-secondary ms-2">Node</span><span className="badge bg-secondary ms-2">React</span><span className="badge bg-secondary ms-2">Firebase</span><span className="badge bg-secondary ms-2">bootstrap</span></h5>
                </div>
                <Container className="mt-3">
                  <Card.Link href="https://proyecto4-mdb8xoky4-garaos.vercel.app" className="text-reset col-8 fs-3 px-2" target="_blank" rel="noopener noreferrer">
                    <i class="fa-solid fa-link"></i>
                  </Card.Link>
                </Container>
              </Card.Body>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Portfolio