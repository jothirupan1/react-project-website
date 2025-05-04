import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import Nav from './component/Nav';
import Hero from './component/hero';
import Product from './component/product';
import Contact from './component/contact';
import Footer from './component/footer';
import See from './component/See';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              {/* <Nav /> */}
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