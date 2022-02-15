import React from "react";
import './Product.css';
import arrow_left from '../../../img/svg/arrow_left.svg';
import size from '../../../img/svg/size.svg';
import rule from '../../../img/svg/rule.svg'
import heart from '../../../img/svg/heart.svg'
import mail_icon from '../../../img/svg/mail.svg';
import truck_icon from '../../../img/svg/truck.svg';
import arr_circle_icon from '../../../img/svg/arr_circl.svg';
import pay1 from '../../../img/png/pay1.png';
import pay2 from '../../../img/png/pay2.png';
import pay3 from '../../../img/png/pay3.png';
import pay4 from '../../../img/png/pay4.png';
import pay5 from '../../../img/png/pay5.png';
import pay6 from '../../../img/png/pay6.png';
import pay7 from '../../../img/png/pay7.png';

import write from '../../../img/svg/write.svg'
import Cart from "../../Cart/Cart";
import share_icon from '../../../img/svg/share.svg';
import filter from '../../../img/svg/filter.svg';
import list from '../../../img/svg/view-list.svg';
import { Link,useLocation,useMatch} from 'react-router-dom';
import { men_items } from '../Men/Men';
import { women_items } from '../Women/Women';
function Product(props) {
    let l=useLocation(); 
     
    let cat=(l.pathname).substring((l.pathname).indexOf("/") + 1, (l.pathname).lastIndexOf("/"));
    let id=(l.pathname).substring((l.pathname).lastIndexOf("/") + 1, (l.pathname).length);
    let current_array=cat=="women"?women_items:men_items ;
  
   

    const section =
<div className="page-product" data-test-id={`product-page-${cat}`}>
        <div className="container" >
        <div className="CategoryPage-infoblock">
        <div className="container" >
    <div >
        
    <div className="info">
        <div className="navigation">
            Home &raquo;<span className="category-name">{cat}</span> &raquo;<span>{current_array[id].title}</span>
        </div>
        <div className="share">
            <img src={share_icon} alt="icon" />
            <p>Share</p></div>
    </div>
    <div className="title">
        <h3>
        {current_array[id].title}
        </h3>
    </div>
    <div className="product-page-footer">
    <div className="product-page-footer-item">
        <img src={process.env.PUBLIC_URL + '/stars.svg'} alt="stars" />
        2 Reviews
    </div>
    <div className="product-page-footer-item">
    SKU:<span className="sku">777</span>
     Availability: <span className="availability">In Stock</span>
    </div>
    </div>
     </div>
</div></div>
            <div className="product-main">
                <div className="photo-section">
                <div className="small-photo-section">
                    <div className="arrows">
                        <img src={arrow_left} alt="up" className="up" />
                        <img src={arrow_left} alt="down" className="down" />
                    </div>
                    <div className="small-photo-container">
                        <div className="small-photo-item"></div>
                        <div className="small-photo-item"></div>
                        <div className="small-photo-item"></div>
                        <div className="small-photo-item"></div>
                    </div>
                </div>
                <div className="big-photo-section">
                    <div className="arrows-product">
                        <img src={arrow_left} alt="left" className="left" />
                        <img src={arrow_left} alt="right" className="right" />
                    </div>
                </div></div>
                <div className="information-section">
                    <div className="color-section">
                        <div className="color-title">
                            <span className="color">Color: </span>
                            <span className="color-name">Blue</span>
                        </div>
                        <div className="color-images">
                            <div className="color-image-item"></div>
                            <div className="color-image-item"></div>
                            <div className="color-image-item"></div>
                            <div className="color-image-item"></div>
                        </div>
                    </div>
                    <div className="size-section">
                        <div className="color-title">
                            <span className="color">Size: </span>
                            <span className="color-name">S</span>
                        </div>
                        <div className="size-list">
                            <div className="size-item">XS</div>
                            <div className="size-item">S</div>
                            <div className="size-item">M</div>
                            <div className="size-item">L</div></div>
                        <img src={size} alt="size" />
                    </div>
                    <div className="price-section">
                        <div className="price-block">{current_array[id].coast}</div>
                        <button className="add-to-cart">add to card</button>
                        <div className="img-price-item"> <img src={heart} alt="heart" className="like" /></div>
                        <div className="img-price-item"><img src={rule} alt="rule" className="rule" /></div>
                    </div>
                    <div className="adv-section">
                        <div className="adv-block-item">
                            <img src={truck_icon} alt="icon" />
                            <div className="text-block">
                                <span className="text">Shipping &amp; Delivery</span>
                            </div>
                        </div>
                        <div className="adv-block-item">
                            <img src={arr_circle_icon} alt="icon" />
                            <div className="text-block">
                                <span className="text">Returns &amp; Exchanges</span>
                            </div>
                        </div>
                        <div className="adv-block-item">
                            <img src={mail_icon} alt="mail" />
                            <div className="text-block">

                                <span className="text">Ask a question</span>
                            </div>
                        </div>

                    </div>

                    <div className="pay-color">
                        <span className="up-line">guaranteed safe checkout</span>
                        <div className="pay-color-images">
                        <img src={pay1} alt="pay" />
                        <img src={pay2} alt="pay" />
                        <img src={pay3} alt="pay" />
                        <img src={pay4} alt="pay" />
                        <img src={pay5} alt="pay" />
                        <img src={pay6} alt="pay" />
                        <img src={pay7} alt="pay" /></div>
                    </div>
                    <div className="description">DESCRIPTION</div>
                    <div className="additional-section">
                        <span className="title">ADDITIONAL INFORMATION</span>
                        <p><span className="name">Color: </span><span className="items">Blue, White, Black, Grey</span></p>
                        <p><span className="name">Size: </span><span className="items">XS, S, M, L</span></p>
                        <p><span className="name">Material: </span><span className="items">100% Polyester</span></p>
                    </div>
                    <div className="review-section">
                        <div className="title">REVIEWS</div>
                        <div className="add-rev">
                            <div className="stars">
                                <img src={process.env.PUBLIC_URL + '/stars.svg'} alt="stars" />
                                <span>2 Reviews</span>
                            </div>
                            <div className="write-rev">
                                <img src={write} alt="wr-icon"></img>
                                <button>Write a review</button>
                            </div>
                 
                        </div>
                        <div className="rev-list">
                                <div className="rev-list-item">
                                    <div className="item-header">
                                        <div className="rev-author">Oleh Chabanov</div>
                                        <div className="rev-info">
                                            <div className="date">3 months ago
                                            </div>
                                            <img src={process.env.PUBLIC_URL + '/stars.svg'} alt="stars" />
                                            
                                        </div>
                                    </div>

                                    <div className="rev-text">On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment</div>
                                </div>
                                <div className="rev-list-item">
                                    <div className="item-header">
                                        <div className="rev-author">ShAmAn design</div>
                                        <div className="rev-info">
                                            <div className="date">3 months ago
                                            </div>
                                            <div className="rev-stars"><img src={process.env.PUBLIC_URL + '/stars.svg'} alt="stars" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rev-text">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti</div>
                                </div>
                            </div> 
                            
                    </div>
                </div>
                </div>
                <div className="related-products">
                    <div className="related-head">
                    <h3>RELATED PRODUCTS</h3>
                    <div className="rev-buttons">
                                <img src={arrow_left} alt="arr" />
                                <img src={arrow_left} alt="arr" className="right"/>
                            </div>
                    </div>
                    <div className="related-list">
                    <Cart title="Women's tracksuit Q109" coast="$ 30.00" src={process.env.PUBLIC_URL + '/img/png/related/1.jpg'}/>
                    <Cart title="Women's tracksuit Q109" coast="$ 30.00" src={process.env.PUBLIC_URL + '/img/png/related/2.jpg'}/>
                    <Cart title="Women's tracksuit Q109" coast="$ 30.00" src={process.env.PUBLIC_URL + '/img/png/related/3.jpg'}/>
                    <Cart title="Women's tracksuit Q109" coast="$ 30.00" src={process.env.PUBLIC_URL + '/img/png/related/4.jpg'}/>
                </div></div>
            
        </div></div>

    return section;
}

export default Product;