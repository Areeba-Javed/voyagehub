import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav  className="navbar navbar-expand-lg bg-body-tertiary ps-3 pe-3 ">
      <div className="container-fluid">
        {/* Logo */}
        <a style={{color:"#1A2238"}} className="navbar-brand d-flex align-items-center fw-bold" href="#">
          <img
            src="/images/l2.png"
            alt="Logo"
            className="img-fluid"
            style={{ maxHeight: '40px', marginRight: '10px' }}
          />
          
        </a>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0" style={{color:'rgba(47, 173, 158, 1)'}}>
            <li className="nav-item" style={{color:'rgba(47, 173, 158, 1)'}}>
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/about'>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/trip'>
                Trip
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/adventure'>
                Adventure
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/contact'>
                Contact
              </Link>
            </li>
          </ul>

          {/* Buttons */}
          <div className="d-flex gap-2">
            <Link to='/login'>
            <button style={{backgroundColor:'rgba(28, 83, 77, 1)'}} type="button"
             className="btn text-light">
              LogIn
            </button>
            </Link>
            <Link to='/signup'> 
            <button style={{borderColor:'rgba(28, 83, 77, 1)',color:"rgba(28, 83, 77, 1)"}} 
            className="btn btn-outline" type="submit">
              SignUp
            </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
