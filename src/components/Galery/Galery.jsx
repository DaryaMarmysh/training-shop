import React from "react";
import './Galery.css';
import arrow_left from '../../img/svg/arrow_left.svg'

function Galery() {
	const section =
    <div className="container">
    <div class="grid">
        <div class="banner">
            <img id="arLeft" src={arrow_left} alt="arrow_left" />
                <img id="arRight" src={arrow_left} alt="arrow_right" />
            <p>
                
                <span class="banner-title">BANNER</span>
                <span class="banner-text">YOUR TITLE TEXT</span>
            </p>
        </div>
        <div class="women">
        <p>WOMEN</p>

        </div>
        <div class="men"><p>MEN</p></div>
        <div class="accessories"><p>ACCESSOIES</p></div>   

    </div>
    </div>
	
	return section;
}

export default Galery;
