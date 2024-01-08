import React from 'react';
import logo from '../images/logo.svg';
import './Navbar.scss';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid p-0">
          <a className="navbar-brand">
            <img src={logo} />
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="dropdown"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto ">
              <li className="nav-item px-3">Features</li>
              <li className="nav-item px-3">Pricing</li>
              <li className="nav-item px-3">Resources</li>
            </ul>
            <span className="nav-item">Login</span>
            <button className="btn btn-primary rounded ">Sign Up</button>
          </div>
          <ul
            className="dropdown-menu bg-secondary text-center px-4 py-5 w-100"
            id="navbarSupportedContent"
          >
            <li>
              <a className="dropdown-item pb-4" href="#">
                Features
              </a>
            </li>
            <li>
              <a className="dropdown-item pb-4" href="#">
                Pricing
              </a>
            </li>
            <li>
              <a className="dropdown-item pb-4" href="#">
                Resources
              </a>
            </li>

            <hr></hr>
            <li>
              <a className="dropdown-item pb-4" href="#">
                Login
              </a>
            </li>
            <li>
              <button className="btn btn-primary rounded">Sign up</button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
