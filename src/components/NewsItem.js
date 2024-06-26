import React from 'react'

const NewsItem=(props)=>{
    let { title, description, imageURL, newsURL, author, date ,source } = props;
    return (
      <div className="my-3">
        <div className="card" >
          <div style={{display:'flex',
        justifyContent:'flex-end',
        position:'absolute',
        right:'0'}}>
        <span className=" badge rounded-pill bg-danger">{source}
              </span>
             </div>
          <img src={imageURL != null ? imageURL : "https://cdn.24.co.za/files/Cms/General/d/10743/97d776dc91734e98906c0e1b7f3b1afa.jpg"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-primary">By {author ? author : "unknown"} on {new Date(date).toGMTString()}</small></p>
            <a href={newsURL} target="_blank" className="btn btn-sm btn-dark">Read more</a>
          </div>
        </div>
      </div>
    )
  }


export default NewsItem
