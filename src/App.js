
import './App.css';
import Homepage from './components/Homepage';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Footer from './components/Footer';
import {Routes, Route, Link} from 'react-router-dom';

function App() {
 return (
 <div className='App'>
    <nav>
        <Link to="/" className='nav-item'>Homepage</Link>
        <Link to="/about-me" className='nav-item'>About me</Link>
        <Link to="/projects" className='nav-item'>Projects</Link>
        <Link to="/contact" className='nav-item'>Contact</Link>
    </nav>
    <Routes>
 <Route path="/" element={<Homepage/>}/>
 <Route path="/about-me" element={<About/>}/>
 <Route path="/projects" element={<Projects/>}/>
 <Route path="/contact" element={<Contact/>}/>
 </Routes>
 <Footer/>
  </div>
 );
}

export default App;
