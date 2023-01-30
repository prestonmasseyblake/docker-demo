import React from 'react'
import Card from './Card'

function CardContainer({people}) {

  function renderCards() {
    let cards = []
    
    
  }


  return (
    <>
    <div class="grid grid-cols-4 gap-8 p-4">
   
   {
   people.map((item) => {
    console.log("hello")
    return (
      <Card info={item}/>
    )
   })
   }

    </div>

    </>
  )
}

export default CardContainer