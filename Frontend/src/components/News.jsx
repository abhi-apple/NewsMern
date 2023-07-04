import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import PropTypes from "prop-types";
import NewsItem2 from "./NewsItem2";
import "../styles/newsItem2.css";
import { useParams } from "react-router-dom";

const News = (props) => {
  let {category} = useParams();
  let [heading, setheading] = useState("");
  let [articles, setarticles] = useState([]);

  async function load() {
    // let API_KEY = "17d463e1f60c466583ea35a35d19b971";
    
    // let API_KEY = "5b3b4ed476cc4feebcf0ddd1e415da42";
    // let API_KEY = "ff22fa5cb7ac4383aa120e77d9423ef1";
    
    let API_KEY = "17d463";
    let url;
    if (category == null) {
      setheading("Top Headlines");
      console.log("null category");
      url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}`;
    } else {
      setheading(category);
      url = `https://newsapi.org/v2/everything?q=${category}&sortBy=popularity&apiKey=${API_KEY}`;
    }

    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    setarticles(parseData.articles);
  }

  useEffect(() => {
    load();
  }, [category]);

  return (
    <div>
      <h2 className="heading">{heading}</h2>

      <div className="news-container">
        {articles?.map((element, index) => {
          console.log(element);
          return (
            <NewsItem2
              imgUrl={element.urlToImage}
              title={element.title}
              description={element.description}
              author={element.author}
              source={element.source.name}
              date={element.publishedAt}
              newsUrl={element.url}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default News;
