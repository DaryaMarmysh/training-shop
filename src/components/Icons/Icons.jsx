import React from "react";
import './Icons.css';
import facebook_icon from '../../img/svg/facebook.svg';
import twitter_icon from '../../img/svg/logo-twitter.svg';
import pinterest_icon from '../../img/svg/logo-pinterest.svg';
import instagram_icon from '../../img/svg/instagram.svg';


function Icons() {
    const section =
   <div className="icons">
       <div className="icon-item"><img src={facebook_icon} alt="icon" />
       </div>
       <div className="icon-item">
       <img src={twitter_icon} alt="icon" />
       </div>
       <div className="icon-item">
       <img src={instagram_icon} alt="icon" />
       </div>
       <div className="icon-item">
       <img src={pinterest_icon} alt="icon" />
       </div>
   </div>

    return section;
}

export default Icons;
