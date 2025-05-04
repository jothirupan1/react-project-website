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

    {
        title:"Baseball bat",
        price:"1000",
        image:"https://i.pinimg.com/736x/f8/13/95/f81395b85ccac8f31ed645208256b1a8.jpg"
    },
    {
        title:"Baseball gloves",
        price:"700",
        image:"https://i.pinimg.com/736x/af/71/52/af7152087453ba5fa097ce06956d01e7.jpg"
    },
    {
        title:"Soccer full kit",
        price:"8000",
        image:"https://i.pinimg.com/736x/1d/3b/01/1d3b0162deffb3b3668bf5c9c482c3d6.jpg"
    },
    {
        title:"Men swin tracks",
        price:"2000",
        image:"https://i.pinimg.com/736x/ed/f8/48/edf84819918286496a5158b88d0cfeb2.jpg"
    }
  ];

function See() {

     const buynow = (title) =>{
       
      alert(`You placed an order for ${title}!`);

      
     };

  return (
  
   
    <section id="pro" className="py-5 bg-light mt-5">
           
           <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <a href="/" className="navbar-brand fw-bold ms-3">Champions League</a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
          aria-controls="navMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navMenu">
        <div className=" text-center ">
    <Link to = '/' className='btn btn-outline-light'>Go back </Link>
  </div>
        </div>
      </div>
    </nav>

     
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
                    <button className="btn btn-outline-primary" onClick={() => buynow(item.title)} >Buy now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
       
          
         
         
        </div>
      
      </section>
  );
}

export default See;