import React, {useState,useEffect} from 'react'
import "./Card.css";
function Card({item, clickedCard, oneClick, twoClick}) {
    const [toggle, setToggle] = useState(false);
    // console.log(item)
    let toggled = false;
    function toggleCard(){
        console.log("toggled")
        setToggle(true)
    }
  return (
    <div onClick={(e) => clickedCard(item.id)} className="flip-card transform 
    transition duration-100 hover:scale-110">
  <div className={`flip-card-inner ${oneClick == item.id ? "action" : ""} ${twoClick == item.id ? "action" : ""}`}>
    <div onClick={toggleCard} className="flip-card-front p-4">
        {/* <p>{item.id}</p> */}
      <img onClick={toggleCard} className="" src="https://lever-client-logos.s3.amazonaws.com/827ce541-e16d-4fe0-b144-cb348e4781a7-1551227490769.png"  alt="Avatar" />
    </div>
    <div className="flip-card-back flex justify-center "> 
      <p>{item.info}</p> 
    </div>
  </div>
</div>
  )
}

export default Card