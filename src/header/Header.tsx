import React from 'react';
import './Header.scss';
import illustration from '../images/illustration-working.svg';
import Navbar from '../navbar/Navbar';

function Header() {
  return (
    <div className="header text-center text-lg-start">
      <Navbar />
      <div className="d-lg-flex flex-row-reverse align-items-center">
        <img src={illustration} alt="" />
        <div>
          <h1 className="py-3">More than just shorter links</h1>
          <p className="pb-4">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <button className="btn btn-primary rounded mb-5">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
