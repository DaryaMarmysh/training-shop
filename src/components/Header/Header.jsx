import React from "react";

import logo from '../../img/svg/CleverShop_logo.svg';
import tel_icon from '../../img/svg/tel.svg';
import loc_icon from '../../img/svg/location-marker.svg';
import clock_icon from '../../img/svg/clock.svg';
import search_icon from '../../img/svg/search.svg';
import globe_icon from '../../img/svg/globe.svg';
import user_icon from '../../img/svg/user.svg';
import bag_icon from '../../img/svg/shopping-bag2.svg';
import Icons from "../Icons/Icons";
import './Header.css';
import { Link } from 'react-router-dom';
function Header() {
	const head =
		<div className='header' data-test-id="header">
			<div className="container">
				<div class="top-bar">

					<div className=" top-bar-items ">

						<div class="contact-info">
							<div class="contact-info-item">
								<img src={tel_icon} alt="telephone" />
								<p>+375 29 100 20 30</p>
							</div>
							<div class="contact-info-item">
								<img src={loc_icon} alt="location" /><p>Belarus, Gomel, Lange 17 </p>
							</div>
							<div class="contact-info-item">
								<img src={clock_icon} alt="time" /> <p>All week 24/7</p>
							</div>
						</div>
						<div className="icons">
							<Icons />
						</div>
					</div>
				</div>
				</div>
				<div className="menu"  data-test-id="menu">
			<div className="container" >
				<header class="main-header ">
					<Link to="/" className="header-nav-logo" data-test-id="header-logo-link">
						<div>
							<img src={logo} alt="logo" />
						</div>
					</Link>
					<div >
						<nav className="main-nav" >
							<ul className="main-nav-list" >
								<Link key={1} to={'/About Us'} className='menu-item' data-test-id={'menu-link-about'}>
									<li >
										<button class="a">About Us</button>
									</li>
								</Link>
								<Link key={2} to="/women" className='menu-item' data-test-id={'menu-link-women'}>
									<li>
										<button class="a">Women</button>
									</li></Link>


								<Link key={3} to={`/men`}  className='menu-item' data-test-id={'menu-link-men'}>
									<li>
										<button class="a">Men</button>
									</li></Link>
								<Link key={4} to='/Beaty' path='/women' className='menu-item' data-test-id={'menu-link-beaty'}>
									<li>
										<button class="a">Beaty</button>
									</li>
								</Link>
								<Link key={5} to='/Accessories' className='menu-item' data-test-id={'menu-link-accessories'}>
									<li>
										<button class="a">Accessories</button>
									</li>
								</Link>
								<Link key={6} to='/Blog' className='menu-item' data-test-id={'menu-link-blog'}>
									<li>
										<button class="a">Blog</button>
									</li>
								</Link>
								<Link key={7} to='/Contact' className='menu-item' data-test-id={'menu-link-contact'}>
									<li>
										<button class="a">Contact</button>
									</li>
								</Link>
							</ul>
						</nav></div>
					<div class="icons-header">
						<ul class="icons-list">
							<li>
								<img src={search_icon} alt="search_icon" />
							</li>
							<li>
								<img src={globe_icon} alt="search_icon" />
							</li>
							<li>
								<img src={user_icon} alt="search_icon" />
							</li>
							<li>
								<img src={bag_icon} alt="search_icon" />
							</li>
						</ul>
					</div>
				</header>
			</div>
			</div>
			</div>
	return head;
}

export default Header;
