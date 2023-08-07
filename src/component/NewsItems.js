import React, { Component } from 'react'

export class NewsItems extends Component {
  render() {
    let {title,description,imgUrl,newsUrl}=this.props;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
            <img src={!imgUrl ?"https://www.hindustantimes.com/ht-img/img/2023/08/06/1600x900/PTI08-06-2023-000033B-0_1691320937980_1691320979713.jpg":imgUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text"> {description}</p>
                <a href={newsUrl} target="_blank"  className="btn btn-sm btn-primary">Read full article</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItems
