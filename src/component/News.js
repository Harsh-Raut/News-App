import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
   
  constructor(){
    super();
    this.state={
      article:[],
      loading:false
    }
  }
  async componentDidMount(){
    let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=cf6586fdb9a84126a7482184a33f29e5";
    let data =await fetch(url);
    let parsedData=await data.json();
    console.log(parsedData);
    this.setState({article:parsedData.articles})
  }
  render() {
    return (
      <div className="container my-3">
        <h1>NewsMonkey-Headlines</h1>
        <div className="row" >
        {this.state.article.map((element)=>{
            return <div className="col md-4 my-3" key={element.url}>
            <NewsItems title={element.title} description={element.description} imgUrl={element.urlToImage} newsUrl={element.url}/>
            </div> })}
            
        </div>
      </div>
    )
  }
}

export default News
