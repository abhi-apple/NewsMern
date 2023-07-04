import "../styles/newsItem2.css";

import React, { useState } from "react";

function NewsItem2(props) {

  return (
    <>
      <div className="news-item">
        <div className="news-item-sec-1">
          <div className="news-item-title">
            <h5>{props.title}</h5>
          </div>
          <hr />
          <div className="news-item-date">Date: {props.date}</div>
          <hr />
          <div className="news-item-source">Source: {props.source}</div>
          <hr />
        </div>
        <div className="news-item-sec-2" style={{backgroundImage: `url(${props.imgUrl == null ? "/images/logo.png" : props.imgUrl})`}}>
        </div>
        <div className="news-item-sec-3">
            <hr />
          <div className="news-item-description">
          {props.description}
          </div>
          <hr />
          <div className="news-item-author">Author: {props.author}</div>
          <div className="nav-item-btn">
               <a href={`${props.newsUrl}`} target="_blank">View article</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsItem2;
