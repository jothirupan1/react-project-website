import React from 'react';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <a href="/" className="navbar-brand fw-bold text-uppercase ms-3">Champions League</a>

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
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="#hero" className="nav-link fw-bold ">Home</a>
            </li>
            <li className="nav-item">
              <a href="#pro" className="nav-link fw-bold ">Product</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link fw-bold ">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;