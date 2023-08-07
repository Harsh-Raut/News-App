import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
  render() {
    return (
      <div class="container my-3">
        <h1>NewsMonkey-Headlines</h1>
        <div className="row">
            <div className="col md-4 my-3">
            <NewsItems title="mytitle" description="des"/>
            </div>
            <div className="col md-4 my-3">
            <NewsItems title="mytitle" description="des"/>
            </div>
            <div className="col md-4 my-3">
            <NewsItems title="mytitle" description="des"/>
            </div>
        
        
        </div>
        <NewsItems/>

        
      </div>
    )
  }
}

export default News
