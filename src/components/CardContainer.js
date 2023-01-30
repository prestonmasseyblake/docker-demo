import React, {useEffect, useState} from 'react'
import Card from './Card'

function CardContainer({people}) {
  

 

  function renderCards(){
    let cards = [];
    console.log(people)
    for(let i = 0; i < people.length; i++){

      let temp_card = {
        id: people[i].id,
        info: people[i].author
      }
      let another_temp_card = {
        id: people[i].id,
        info: people[i].description
      }
      console.log("this is temp_card",temp_card)
      cards.push(temp_card)
      cards.push(another_temp_card)
    }
    cards = cards.sort((a, b) => 0.5 - Math.random());
    console.log("cards in the function",cards)
    return cards;
  }
  const items = renderCards();
  console.log(items)
    useEffect(() => {
      
     
    }, [])
    

  return (
    <>
    <div class="grid grid-cols-4 gap-8 p-4">
   
   {
   items.map((item) => {
   console.log("this is the item in the map",item)
    return (
      <Card item={item}/>
    )
   })
   }

    </div>

    </>
  )
}

export default CardContainer