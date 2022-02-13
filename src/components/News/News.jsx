import React from "react";
import './News.css';


function News() {
    const section =
        <div class="container">
            <div className="news ">

                <div className="news-item news1">
                    <div className="text-block">
                        <span className="title">New Season</span>
                        <span className="text">lookbook collection</span>
                    </div>
                </div>
                <div className="news-item news2">
                    <div className="text-block">
                        <span className="title">Sale
                        </span>
                        <span className="text">Get UP to <span className="pink">50% off</span>   </span>
                    </div>
                </div>
            </div>

        </div>

    return section;
}

export default News;
