import React from 'react';
import { Link } from 'react-router-dom';

const productdetails = [
  {
    title: 'Football shoes',
    price: 12599,
    image: 'https://i.pinimg.com/736x/4c/93/44/4c934407538f3579bd4060a70091fe9c.jpg',
  },
  {
    title: 'Puma Gloves',
    price: 10199,
    image: 'https://i.pinimg.com/736x/f0/10/41/f010419a59f0a36ba0167343c4145ba7.jpg',
  },
  {
    title: 'Cricket bat',
    price: 15199,
    image: 'https://i.pinimg.com/736x/28/a1/1c/28a11c7da6c24d2d7f8cffab323586c7.jpg',
  },
  {
    title: 'Volleyball',
    price: 8199,
    image: 'https://i.pinimg.com/736x/21/b9/22/21b922e4e21732c44a783943f2ea8580.jpg',
  },
];

function Product() {
  return (
    <section id="pro" className="py-5 bg-light mt-5">
      <div className="container">
        <h2 className="text-center fw-bolder mt-5">Our Products</h2>
        <div className="row g-4">
          {productdetails.map((item, index) => (
            <div className="col-sm-6 col-md-4 col-lg-3" key={index}>
              <div className="card shadow-sm h-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="card-img-top"
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column text-center">
                  <h5>{item.title}</h5>
                  <h6>${item.price}</h6>
                  <Link to="/see" className="btn btn-outline-primary">Buy now</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-5">
          <Link to="/see" className="btn btn-primary">
            See more
          </Link>
    
        </div>
      </div>
    </section>
  );
}

export default Product;