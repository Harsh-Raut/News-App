import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinning from './Spinning.js'
import PropTypes from 'prop-types'



export class News extends Component {
  static defaultProps={
    country:"in",
    category:'general',
    pageSize:5

  }
  static propTypes={
    country:PropTypes.string,
    category:PropTypes.string,
    pageSize:PropTypes.number

  }
   
  constructor(){
    super();
    this.state={
      article:[],
      loading:false,
      page:1,
      
    }
  }
  async componentDidMount(){
    let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=cf6586fdb9a84126a7482184a33f29e5&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data =await fetch(url);
    let parsedData=await data.json();
    console.log(parsedData);
    this.setState({article:parsedData.articles,
      totalResults:parsedData.totalResults,
     loading:false})
  }
  handleNextClick=async()=>{
     if (!(this.state.page+1>Math.ceil(this.state.totalResults/12))){
      let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=cf6586fdb9a84126a7482184a33f29e5&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data =await fetch(url);
      let parsedData=await data.json();
      console.log(parsedData);
      this.setState({article:parsedData.articles})
    
      this.setState({
        page:this.state.page+1,
        articles:parsedData.articles,
        loading:false
      })
     }
     
      
  }
  handlePrevClick=async()=>{
    
      let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=cf6586fdb9a84126a7482184a33f29e5&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data =await fetch(url);
      let parsedData=await data.json();
      console.log(parsedData);
      this.setState({article:parsedData.articles})
    
    this.setState({
      page:this.state.page-1,
      articles:parsedData.articles,
      loading:false
    })
  }
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">NewsMonkey-Top Headlines</h1>
        <hr/>
        {this.state.loading&&<Spinning/>}
        {!this.state.loading&&<div className="row" >
        {this.state.article.map((element)=>{
            return <div className="col-md-4 my-3" key={element.url}>
            <NewsItems title={element.title} description={element.description} imgUrl={element.urlToImage} newsUrl={element.url}/>
            </div> })}
            
        </div>}
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
        <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/12)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>


        </div>
      </div>
    )
  }
}

export default News
