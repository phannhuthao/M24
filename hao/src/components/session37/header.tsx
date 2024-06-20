import React from 'react';
import './header.css';

const Header: React.FC = () => {
  return (
    <>
      <div className='Topheader'>
        <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF! 
            <a className='a' href='ShopNow'> ShopNow </a></p>
      </div>
      <header className="header">
        <div className="header__content">
          <div className="logo">Exclusive</div>
          <nav>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#signup">Sign Up</a></li>
            </ul>
          </nav>
          <div className="search-bar">
            <input type="text" placeholder="Search... " />
            <button type="button"><i className="fas fa-search"></i></button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
