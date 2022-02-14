import React from "react";
import {Link} from 'react-router-dom';
import './Footer.css';
import Icons from "../Icons/Icons";
import pay_group from '../../img/png/pay_group.png'
function Footer() {
  const section =
    <footer className="footer" data-test-id="footer">
      <div className="footer-connect">
        <div className="container">
          <div className="connect-items">
            <div className="connect-item">BE IN TOUCH WITH US:</div>
            <div className="connect-item join-us-block">
              <input type="text" className="email" placeholder="Enter your email" />
              <button className="join">Join Us</button>
            </div>
            <div className="connect-item">
              <Icons />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <ul className="footer__nav">
          <li className="nav__item">
            <h2 className="nav__title">Categories</h2>
            <ul className="nav__ul" data-test-id="menu"> 
            <Link key={3} to='/men'  className='menu-item' data-test-id={'footer-nav-link-men'}>
              <li>
                <button className="a">Men</button>
              </li>
              </Link>
              <Link key={2} to="/women" className='menu-item' data-test-id={'footer-nav-link-women'}>
              <li>
                <button className="a">Women</button>
              </li>
              </Link>
              <Link key={5} to='/Accessories' className='menu-item' data-test-id={'footer-nav-link-accessories'}>
              <li>
                <button className="a">Accessories</button>
             </li>
             </Link>
             <Link key={4} to='/Beaty' className='menu-item' data-test-id={'footer-nav-link-beaty'}>
              <li>
                <button className="a">Beauty</button>
              </li>
              </Link>
            </ul>
          </li>
          <li className="nav__item">
            <h2 className="nav__title">Infomation</h2>
            <ul className="nav__ul">
            <Link key={1} to={'/About Us'} className='menu-item' data-test-id={'footer-nav-link-about'}>
              <li>
                <button className="a">About Us</button>
              </li>
              </Link>
              <Link key={7} to='/Contact' className='menu-item' data-test-id={'footer-nav-link-contact'}>
              <li>
                <button className="a">Contact Us</button>
              </li></Link>
              <Link key={6} to='/Blog' className='menu-item' data-test-id={'footer-nav-link-blog'}>
              <li>
                <button className="a">Blog</button>
              </li>
              </Link>
              <li>
                <button className="a">FAQs</button>
              </li>
            </ul>
          </li>
          <li className="nav__item">
            <h2 className="nav__title">Useful links</h2>
            <ul className="nav__ul">
              <li>
                <button className="a">Terms &amp; Conditions</button>
              </li>
              <li>
                <button className="a">Returns &amp; Exchanges
                </button>
              </li>
              <li>
                <button className="a">Shipping &amp; Delivery
                </button>
              </li>
              <li>
                <button className="a">Privacy Policy</button>
              </li>
            
            </ul>
          </li>
          <li className="nav__item">
                <h2 className="nav__title">CONTACT US</h2>
                <ul className="nav__ul">
                  <li>
                    <button className="a">Privacy Policy</button>
                  </li>
                  <li>
                    <button className="a">Terms of Use</button>
                  </li>
                  <li>
                    <button className="a">Sitemap</button>
                  </li>
                  <li>
                    <button className="a">Sitemap</button>
                  </li>
                </ul>
              </li>
        </ul>
      </div >
      <div className="legal">
        <div className="container">
          <div className="legal-items">
            <div className="legal-item">
              <p>Copyright &copy; 2032 all rights reserved</p>
            </div>
            <div className="legal-item">
              <img src={pay_group} alt="pay" />
            </div>
            <div className="legal-item">
              <a href="https://github.com/DaryaMarmysh">Clevertec.ru/training</a>
            </div>
          </div>
         
        </div>
      </div>
    </footer >
  return section;
}
export default Footer;
