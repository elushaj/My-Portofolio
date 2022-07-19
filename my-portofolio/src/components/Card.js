import React from 'react'
import '../components/card.css'
const Card = ({loadPost}) => {
  return (
<div className="artboard">
 <div className="card">

  <div className="card__side card__side--back">
   <div className="card__cover">
    <h4 className="card__heading">
     <span className="card__heading-span">Description</span>
    </h4>
   </div>
   <div className="card__details">
    <ul>
     <li ><a href={loadPost.html_url}>Visit repository</a></li>
     <li ><a href={loadPost.downloads_url}>Download</a></li>
    
    </ul>
   </div>
  </div>

  <div className="card__side card__side--front">
   <div className="card__theme">
    <div className="card__theme-box">
     <p className="card__subject">{loadPost.language}</p>
     <p className="card__title">{loadPost.name}</p>
    </div>
   </div>
  </div>

 </div>
</div>
  )
}

export default Card