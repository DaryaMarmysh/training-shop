import React from "react";
import './Catalog.css';
import Cart from "../Cart/Cart";
import { useMatch} from 'react-router-dom';
function Catalog(props) {
   
    const section =
 <div className="container">
      
         
            
        <div className="catalog">
           
           { props.arr.map(el=><Cart  key={el.id} title={el.title} coast={el.coast} src={process.env.PUBLIC_URL+el.src}/>)}
            </div>
        </div>

    return section;
}

export default Catalog;