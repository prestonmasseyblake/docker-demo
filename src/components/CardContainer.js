import React, {useEffect, useState} from 'react'
import Card from './Card'
import MatchedCard from './MatchedCard'
function CardContainer({stateCards, clickedCard, oneClick, twoClick,matches}) {
  
   

 

 
 
  // console.log(items)
    useEffect(() => {
      
      // console.log("this is state cards",stateCards)
    },[])
    

  return (
    <>
    <div className="grid grid-cols-4 gap-8 p-4">
  {stateCards ? <> {
   stateCards.map((item) => {
  //  console.log("this is the item in the map",item)

    if(!matches.includes(item.id))
    return (<Card oneClick={oneClick} twoClick={twoClick} clickedCard={clickedCard} key={item.id} item={item}/>)
    else 
      return(<MatchedCard/>)
   })
   } </> : null}

    </div>

    </>
  )
}

export default CardContainer