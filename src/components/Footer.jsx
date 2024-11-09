import React from 'react';
import './components.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="newsletter">
          <h2>Don't Miss Out</h2>
          <p>Sign up for the latest beauty news, product samples and coupons</p>
          <form>
            <input type="email" placeholder="Enter Your Email Address" required />
            <input type="date" />
            <button type="submit">SIGN UP</button>
          </form>
          <p className="disclaimer">
            *This site is intended for US consumers.
          </p>

         <div className="social-links">
          <a href="#instagram"><i className="fab fa-instagram"></i></a>
          <a href="#facebook"><i className="fab fa-facebook-f"></i></a>
          <a href="#twitter"><i className="fab fa-twitter"></i></a>
          <a href="#tumblr"><i className="fab fa-tumblr"></i></a>
          <a href="#youtube"><i className="fab fa-youtube"></i></a>
        </div>

        </div>
        <div className="footer-links">
          <div className="link-block">
            <h3>COMPANY</h3>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#experts">Experts and Spokesmodels</a></li>
               <li><a href="#about">About</a></li>
              <li><a href="#experts">Experts and Spokesmodels</a></li> <li><a href="#about">About</a></li>
              <li><a href="#experts">Experts and Spokesmodels</a></li>
            </ul>
          </div>
          <div className="link-block">
            <h3>CUSTOMER</h3>
            <ul>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#account">My Account</a></li>
              <li><a href="#store">Store Locator</a></li>
              <li><a href="#rewards">Redeem rewards</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#account">My Account</a></li>
              <li><a href="#store">Store Locator</a></li>
              <li><a href="#rewards">Redeem rewards</a></li>
            </ul>
          </div>
          <div className="link-block">
            <h3>EXPLORE</h3>
            <ul>
              <li><a href="#magazine">Beauty Magazine</a></li>
              <li><a href="#tools">Tools and Consultations</a></li>
              <li><a href="#offers">Offers</a></li>
              <li><a href="#hashtag">LorealParis</a></li>
               <li><a href="#magazine">Beauty Magazine</a></li>
              <li><a href="#tools">Tools and Consultations</a></li>
              <li><a href="#offers">Offers</a></li>
              <li><a href="https://www.google.com">LorealParis</a></li>
            </ul>
          </div>
        </div>
       
      </div>
    </footer>
  );
}

export default Footer;
