import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import './styles/App.css';
import { useState } from 'react';
import Events from './pages/Events';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const pages = [
    <Home />,
    <About />,
    <Events />,
    <Projects />,
    <Contact />
  ];


  return (
    <div className="">
      <Navbar setPage={setCurrentIndex} />
      {pages[currentIndex]}
      <Footer />
    </div>
  );
}

export default App;
