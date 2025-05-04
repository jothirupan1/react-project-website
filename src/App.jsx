import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Hero from './components/hero';
import Product from './components/product';
import Contact from './components/contact';
import Footer from './components/footer';
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