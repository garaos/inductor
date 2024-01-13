import { useContext } from 'react';
import { NavContext } from '../context/NavContext';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import induct3 from '../img/inductor-03.png'
import styles from '../styles/Header.module.css';



const Header = () => {
  const { activeLinkId } = useContext(NavContext);

  const navLinks = ['Home', 'Nosotros', 'Proyectos', 'Contacto'];

  const handleClickLogo = () => {
    document.getElementById('homeSection').scrollIntoView({ behavior: "smooth" })
  }

  const renderNavLink = (content) => {
    const scrollToId = `${content.toLowerCase()}Section`;

    const handleClickNav = () => {
      document.getElementById(scrollToId).scrollIntoView({ behavior: "smooth" })
    }

    return (
      <ul key={content}>
        <li>
          <button
            onClick={handleClickNav}
            className={activeLinkId === content ? styles.activeClass : ""}
          >{content}</button>
        </li>
      </ul>
    )
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.navContainer}>
          <img src={induct3} alt="ico" onClick={handleClickLogo} className="gonB" />
          <Navbar expand="lg" variant="dark">
            <Container>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                  {navLinks.map(nav => renderNavLink(nav))}
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </div>
    </header>
  )
}

export default Header