import React from 'react'
import "./SuccessCard.css"
function SuccessCard({tries}) {
    function refresh() {
        window.location.reload();
      }
  return (
    <div className="successContainer">
        <div className='bg-[#FFF] p-8 w-2/4'>
       <p className='my-4'>
       Congradulations You took {tries} to get all the matches.
        </p> 
        <button onClick={refresh} className={` bg-[#333]  py-2 px-4 rounded-md  font-bold round-md`}>Reset Game</button>
        </div>

    </div>
  )
}

export default SuccessCard