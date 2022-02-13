import React from "react";
import share_icon from '../../../img/svg/share.svg';
import filter from '../../../img/svg/filter.svg';
import list from '../../../img/svg/view-list.svg';
import grid from '../../../img/svg/view-grid.svg';
import small_arr from '../../../img/svg/small-arrow.svg';
import './Men.css'
import Catalog from "../../Catalog/Catalog";
import {
   
    useRouteMatch,
   
  } from "react-router-dom";
  export const men_items = [
    {
        id: 1,
        title: "Women's tracksuit Q109",
        coast: "$ 30.00",
        src: "/img/png/catalog/men/1.jpg",
        stars: 3

    },
    {
        id: 2,
        title: "Women's tracksuit Q109",
        coast: "$ 30.00",
        src: "/img/png/catalog/men/2.jpg",
        stars: 3

    },
    {
        id: 3,
        title: "Women's tracksuit Q109",
        coast: "$ 30.00",
        src: "/img/png/catalog/men/3.jpg",
        stars: 3

    },
    {
        id: 4,
        title: "Women's tracksuit Q109",
        coast: "$ 30.00",
        src: "/img/png/catalog/men/4.jpg",
        stars: 3

    },
    {
        id: 5,
        title: "Women's tracksuit Q109",
        coast: "$ 30.00",
        src: "/img/png/catalog/men/5.jpg",
        stars: 3

    },
    {
        id: 6,
        title: "Women's tracksuit Q109",
        coast: "$ 30.00",
        src: "/img/png/catalog/men/6.jpg",
        stars: 3

    },
    {
        id: 7,
        title: "Women's tracksuit Q109",
        coast: "$ 39.00",
        src: '/img/png/catalog/men/7.jpg',
        stars: 3

    },
    {
        id: 8,
        title: "Women's tracksuit Q109",
        coast: "$ 30.00",
        src: '/img/png/catalog/men/8.jpg',
        stars: 3

    }
]
function Men() {
    
    const section = <div >
        <div className="CategoryPage-infoblock">
        <div className="container" >
    <div >
        
    <div className="info">
        <div className="navigation">
            Home &raquo; <span>Men</span>
        </div>
        <div className="share">
            <img src={share_icon} alt="icon" />
            <p>Share</p></div>
    </div>
    <div className="title">
        <h3>
            Men
        </h3>
    </div>
     </div>
</div></div>
<div className="container">
<div className="filter-block">
    <div className="filter">
        <img src={filter} alt="filter-icon" />
        <span>filter</span>
    </div>
    <div className="view">
        <img src={list} alt="grid" />
      
    <img src={grid} alt="grid" className="grid-image"/>  
    </div>
    <div className="best">
        <span>
            BESTSELLERS
        </span>
        <img src={small_arr} alt="arr" />
    </div>
</div>
   </div>
    
      <Catalog title='Men' arr={men_items}/>
      </div> 
    return section;
}

export default Men