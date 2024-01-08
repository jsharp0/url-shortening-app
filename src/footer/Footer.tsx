import React from 'react';
import logo from '../images/logo-light.svg';
import twitter from '../images/icon-twitter.svg';
import facebook from '../images/icon-facebook.svg';
import instagram from '../images/icon-instagram.svg';
import pinterest from '../images/icon-pinterest.svg';

import './Footer.scss';

function Footer() {
  return (
    <div className="footer bg-dark text-light text-center text-lg-start py-5 container-fluid px-10">
      <div className="row justify-content-center align-items-start">
        <div className="col-lg-4 ">
          <img src={logo} className="logo pb-4 " alt="" />
        </div>

        <ul className="p-0 mb-3 col-lg">
          <h4 className="light">Features</h4>
          <li>
            <a href="#" className="link-light">
              Link Shortening
            </a>
          </li>
          <li>
            <a href="#" className="link-light">
              Branded Links
            </a>
          </li>
          <li>
            <a href="#" className="link-light">
              Analytics
            </a>
          </li>
        </ul>

        <ul className="p-0 mb-3 col-lg">
          <h4 className="light">Resources</h4>
          <li>
            <a href="#" className="link-light">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="link-light">
              Developers
            </a>
          </li>
          <li>
            <a href="#" className="link-light">
              Support
            </a>
          </li>
        </ul>
        <ul className="p-0 col-lg">
          <h4 className="light">Company</h4>
          <li>
            <a href="#" className="link-light">
              About
            </a>
          </li>
          <li>
            <a href="#" className="link-light">
              Our Team
            </a>
          </li>
          <li>
            <a href="#" className="link-light">
              Careers
            </a>
          </li>
          <li>
            <a href="#" className="link-light">
              Contact
            </a>
          </li>
        </ul>

        <div className="icons pt-4 pt-lg-0">
          <img src={facebook} />
          <img src={twitter} />
          <img src={pinterest} />
          <img src={instagram} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
