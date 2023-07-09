import "../styles/newsItem2.css";

import React, { useState } from "react";

function NewsItem2(props) {

  return (
    <>
      <div className="news-item">
        <div className="news-item-sec-1">
          <div className="news-item-title">
            <h5>{props.title != null ?props.title: "Unknown"}</h5>
          </div>
          <hr />
          <div className="news-item-date">Date: {props.date != null ? props.date: "Unknown"}</div>
          <hr />
          <div className="news-item-source">Source: {props.source != null ?props.source:"Unknown"}</div>
          <hr />
        </div>
        <div className="news-item-sec-2" style={{backgroundImage: `url(${props.imgUrl == null ? "/images/logo.png" : props.imgUrl})`}}>
        </div>
        <div className="news-item-sec-3">
            <hr />
          <div className="news-item-description">
          {props.description != null ? props.description : "Unknown"}
          </div>
          <hr />
          <div className="news-item-author">Author: {props.author != null ? props.author : "Unknown"}</div>
          <div className="nav-item-btn">
               <a href={`${props.newsUrl != null ? props.newsUrl: "/"}`} target="_blank">View article</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsItem2;
