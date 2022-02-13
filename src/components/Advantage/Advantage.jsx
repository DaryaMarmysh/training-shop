import React from "react";
import './Advantage.css';
import support_icon from '../../img/svg/support.svg';
import truck_icon from '../../img/svg/truck.svg';
import arr_circle_icon from '../../img/svg/arr_circl.svg';

function Advantage() {
    const section =
        <div className="advantage"><div className="container">
            <div className="block">
                
                <div className="block-item">
                    <img src={truck_icon} alt="icon" />
                    <div className="text-block">
                        <span className="title">FREE SHIPPING</span>
                        <span className="text">On all UA order or order above $100</span>
                        </div>
                </div>
                <div className="block-item">
                    <img src={arr_circle_icon} alt="icon" />
                    <div className="text-block">
                        <span className="title">30 DAYS RETURN</span>
                        <span className="text">Simply return it within 30 days for an exchange</span>
                        </div>
                </div>
                <div className="block-item">
                    <img src={support_icon} alt="sup" />
                    <div className="text-block">
                        <span className="title">SUPPORT 24/7</span>
                        <span className="text">Contact us 24 hours a day, 7 days a week</span>
                        </div>
                </div>
            </div>
</div>
        </div>

    return section;
}

export default Advantage;
