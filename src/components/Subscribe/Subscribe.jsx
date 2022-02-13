import React from "react";
import './Subscribe.css';


function Subscribe() {
    const section =
        <div class="bg">
           
            <div className="photo1">
                </div>
                <div className="photo2"></div>
                <div className="text-block">
                <span className="title">Special Offer</span>
                <span className="text">Subscribe  <span className="text">And <span className="pink">Get 10% Off</span></span></span>
                <input type="text" className="email" placeholder="Enter your email"/>
                <button className="sub">Subscribe</button>
                </div>
                </div>

       

    return section;
}

export default Subscribe;
