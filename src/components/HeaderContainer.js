import React from 'react'
import "./HeaderContainer.css";
function HeaderContainer({score, tries}) {
  return (
    <>
    <div className='flex p-4 items-center'>
    <div class="logo-container flex justify-center items-center ">
                        <div class="image-container absolute w-12">
                        <img src="https://res.cloudinary.com/di2xwf4ol/image/upload/v1667292213/liatroLogoBlack_lefbai.png" class="logo" />
                        </div>
                        <div class="orb">
                        </div>
                    </div >
                    <div className='flex items-center '>
   <h1 className='mx-4 text-xl font-bold text-white'>Liatrio Read.me <hr></hr> matching game</h1>
    <p className='mx-4 font-bold text-xl text-white'>
      Matches: {score}
    </p>
    <p className='mx-4 font-bold text-xl text-white'>
      Tries: {tries}
      </p>
    </div>
    {/* <div className='flex mx-4'>
      <p className='mr-2 font-bold'>Number Of Matches:</p>
      <select>
        <option>8</option>
        <option>16</option>
        <option>32</option>
      </select>
    </div> */}
    <div>
      <button className='bg-[#333] py-2 px-4 rounded-md text-white font-bold'>Reset Game</button>
    </div>
    </div>
    </>
  )
}

export default HeaderContainer