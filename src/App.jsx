import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Product from './components/Product';
import Contact from './components/Contact';
import Footer from './components/Footer';
import See from './components/See';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Nav />
              <Hero />
              <Product />
              <Contact />
              <Footer />
              
            </div>
          }
        />
        <Route path="/see" element={<See />} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;