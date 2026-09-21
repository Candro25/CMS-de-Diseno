import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Crear from './pages/Crear';

function App() {
  return (
    <div>
      <Navbar />
        <Routes>
          <Route path= "/" element={<Home />} />
          <Route path= "/Crear" element={<Crear />} />

        </Routes>
      </div>
  )
}

export default App
