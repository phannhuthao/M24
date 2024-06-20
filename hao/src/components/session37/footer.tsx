import React from 'react';
import './footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';



const Footer = () => {
  return (
    <div className='footer'>
      <div className='FirstOne'>
        <h1>Exclusive</h1>
        <p>Subscribe</p>
        <p>Get 10% off your first order</p>
        <input type='text' placeholder='Enter your email...' />
      </div>

      <div className='FirstTwo'>
        <h1>Support</h1>
        <p>111 Bijoy sarani, Dhaka,</p>
        <p>DH 1515, Bangladesh.</p>
        <p>exclusive@gmail.com</p>
        <p>+88015-88888-9999</p>
      </div>

      <div className='FirstThree'>
        <h1>My account</h1>
        <p>Login/ Register</p>
        <p>Cart</p>
        <p>Wishlist</p>
        <p>Shop</p>
      </div>

      <div className='FirstFour'>
        <h1>Quick Link</h1>
        <p>Privacy Policy</p>
        <p>Terms of Use</p>
        <p>FAQ</p>
        <p>Contact</p>
      </div>

      <div className='FirstFive'>
        <h1>Download App</h1>
        <p>Save $3 with App New User Only</p>
        <div className='social-icons'>
          <a href='#'>
            <i className='fab fa-facebook'></i>
          </a>
          <a href='#'>
            <i className='fab fa-twitter'></i>
          </a>
          <a href='#'>
            <i className='fab fa-youtube'></i>
          </a>
          <a href='#'>
            <i className='fab fa-instagram'></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
