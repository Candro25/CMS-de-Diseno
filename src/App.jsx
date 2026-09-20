import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Navbar />
        <Routes>
          <Route path= "/Home" element={<Home />} />
          <Route path= "/About" element={<About />} />
          <Route path= "/Contact" element={<Contact />} />
          

        </Routes>
      </div>
  )
}

export default App
