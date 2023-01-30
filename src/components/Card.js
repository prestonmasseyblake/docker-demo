import React from 'react'
import "./Card.css";
function Card({item}) {
    console.log(item)
  return (
    <div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front p-4">
      <img className="" src="https://lever-client-logos.s3.amazonaws.com/827ce541-e16d-4fe0-b144-cb348e4781a7-1551227490769.png"  alt="Avatar" />
    </div>
    <div className="flip-card-back flex justify-center "> 
      <p>{item.info}</p> 
    </div>
  </div>
</div>
  )
}

export default Card