import PropTypes from "prop-types";
import NewsItem from "./NewsItem";
import Headers from "./Header";

import React, { Component } from "react";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      heading: "",
    };
  }

  async componentDidMount() {
    // let API_KEY = "17d463e1f60c466583ea35a35d19b971";
    let API_KEY = "17";
    let url;
    if (this.props.category == null) {
      this.state.heading = "Top Headlines";
      console.log("null category");
      url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}`;
    } else {
      let { category } = this.props;
      this.state.heading = category;

      url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${API_KEY}`;
    }
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({ articles: parseData.articles });
  }
  render() {
    return (
      <div>
        <h2 className="heading">{this.state.heading}</h2>
        
        <div className="news">
          {this.state.articles?.map((element, index) => (
            <NewsItem
              imgUrl={element.urlToImage}
              title={element.title}
              description={element.description}
              author={element.author}
              source={element.source.name}
              date={element.publishedAt}
              newsUrl={element.url}
              key={index}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default News;
