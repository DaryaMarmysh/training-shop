import React from "react";
import './MainPageCatalogHeader.css';


function MainPageCatalogHeader(props) {
    const section =
  <div className="container">
     <div className="catalog-header">
       
         <div className="catalog-title">{props.title}</div>
         <div className="catalog-menu-list">
             <ul>
                 <li>NEW ARRIVALS</li>
                 <li>SPECIALS</li>
                 <li>BESTSELLERS</li>
                 <li>MOST VIEWED</li>
                 <li>FEATURED PRODUCTS</li>
             </ul>

         </div>
     </div>
     </div>

    return section;
}

export default MainPageCatalogHeader;