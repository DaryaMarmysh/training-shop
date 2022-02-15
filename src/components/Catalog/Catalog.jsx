import React from "react";
import './Catalog.css';
import Cart from "../Cart/Cart";
import { Link,useLocation,useMatch} from 'react-router-dom';
function Catalog(props) {
  
   let category=props.title;
    const section =
    <div > 
 <div className="container" >
        <div className="catalog">
           
           { props.arr.map(el=><Link className="card-item" data-test-id={`clothes-card-${category}`} to={props.path+'/'+el.id} >
               <Cart category={props.title} key={el.id} title={el.title} 
               coast={el.coast} src={process.env.PUBLIC_URL+el.src}/></Link>)
               
               }
            </div>
        </div>
        </div>

    return section;
}

export default Catalog;