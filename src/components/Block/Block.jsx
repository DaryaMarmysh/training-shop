import React from "react";
import './block.css';


function Block() {
    const section =
        <div class="container">
            <div className="blog">
                <div className="titles">
                <span className="title">LATEST FROM BLOG</span>
                <span className="see-all">SEE ALL</span>
                </div>
                <div className="blog-items">
                <div className="blog-item blog-item1">
                    <p>
                        <span className="title">The Easiest Way to Break</span>
                        <span className="text">But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor</span>
                    </p>
                </div>
                <div className="blog-item blog-item2">
                <p>
                        <span className="title">Wedding Season</span>
                        <span className="text">But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor</span>
                    </p>
                </div>
                <div className="blog-item blog-item3">
                <p>
                        <span className="title">Recent Favorites On Repeat</span>
                        <span className="text">But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor</span>
                    </p>
                </div>
                </div>
                

            </div>
        </div>

    return section;
}

export default Block;