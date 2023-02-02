import React from 'react'
import "./HeaderContainer.css";
function HeaderContainer({score, tries, mode, toggleMode}) {
  function refresh() {
    window.location.reload();
  }

  return (
    <>
    <div className='flex px-8 py-4 items-center'>
    <div class="logo-container flex justify-center items-center ">
                        <div class="image-container absolute w-12">
                        <img src="https://res.cloudinary.com/di2xwf4ol/image/upload/v1667292213/liatroLogoBlack_lefbai.png" class="logo" />
                        </div>
                        <div class="orb">
                        </div>
                    </div >
                    <div className='flex items-center '>
   <h1 className={`mx-4 text-xl font-bold ${mode ? "text-white" : "text-black"}`}>Liatrio Read.me <hr></hr> matching game</h1>
    <p className={`mx-4 font-bold text-xl ${mode ? "text-white" : "text-black"}`}>
      Matches: {score}
    </p>
    <p className={`mx-4 font-bold text-xl ${mode ? "text-white" : "text-black"}`}>
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
      <button onClick={refresh} className={`  ${mode ? "bg-[#333]" : "bg-[#abf7b1]"}  py-2 px-4 rounded-md ${mode ? "text-white" : "text-black"} font-bold`}>Reset Game</button>
    </div>

    <div className={` ${mode ? "bg-[#333]" : "bg-[#abf7b1]"} p-1 m-4 rounded-full`}>
      {mode ? 
      <button className="" onClick={toggleMode} > ☀️ </button> : 
      <button className="" onClick={toggleMode} > 🌕 </button> }
    </div>
    </div>
    </>
  )
}

export default HeaderContainer