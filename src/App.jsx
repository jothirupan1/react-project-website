import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from 'src/component/nav';
import Hero from 'src/component/hero';
import Product from 'src/component/product';
import Contact from 'src/component/contact';
import Footer from 'src/component/footer';
import See from 'src/component/See';

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