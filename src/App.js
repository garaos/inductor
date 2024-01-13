import Header from './components/Header';
import Home from './sections/Home'
import About from './sections/About';
import Portfolio from './sections/Portfolio';
import Footer from './sections/Footer';
import NavProvider from './context/NavContext'

function App() {
  return (
    <div>
      <NavProvider>
        <Header />
        <Home />
        <About />
        <Portfolio />
        <Footer />
      </NavProvider>
    </div>
  );
}

export default App;
