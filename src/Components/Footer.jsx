import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer mt-5" style={{backgroundColor: "#343a40", color:"#fff", padding:"20px "}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-title fw-bold fs-5 mb-5" style={{color:"#fff"}}>Company</h5>
            <ul className="footer-links">
              <li><Link to="">About Us</Link></li>
              <li><Link to="">Contact Us</Link></li>
              <li><Link to="">Our Services</Link></li>
              <li><Link to="">Privacy Policy</Link></li>
              <li><Link to="">Terms & Condition</Link></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-title fw-bold fs-5 mb-5" style={{color:"#fff"}}>Quick Links</h5>
            <ul className="footer-links">
              <li><Link to="">About Us</Link></li>
              <li><Link to="">Contact Us</Link></li>
              <li><Link to="">Our Services</Link></li>
              <li><Link to="">Privacy Policy</Link></li>
              <li><Link to="">Terms & Condition</Link></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-title fw-bold fs-5 mb-5" style={{color:"#fff"}}>Contact</h5>
            <p><i className="fa fa-map-marker-alt me-2" />123 Street, New York, USA</p>
            <p><i className="fa fa-phone-alt me-2" />+012 345 67890</p>
            <p><i className="fa fa-envelope me-2" />info@example.com</p>
            <div className="footer-social">
              <Link to="https://twitter.com/i/flow/login"><i className="fab fa-twitter" /></Link>
              <Link to="https://facebook.com/"><i className="fab fa-facebook-f" /></Link>
              <Link to="https://www.youtube.com/"><i className="fab fa-youtube" /></Link>
              <Link to="https://www.linkedin.com/"><i className="fab fa-linkedin-in" /></Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-title fw-bold fs-5 mb-5" style={{color:"#fff"}}>Newsletter</h5>
            <p>Enter your email here and sign up.</p>
            <div className="footer-newsletter">
              <input className="form-control" type="text" placeholder="Your email" />
              <button type="button" className="btn btn-info">SignUp</button>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="copyrights mb-0">
          <p style={{color:"#CAF4FF", marginBottom:"0%"}}> © copyright 2024 All rights reserved Muskan Thakur </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
