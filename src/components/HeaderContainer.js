import React from 'react'

function HeaderContainer({score, tries}) {
  return (
    <>
    <div className='flex p-4'>
   <h1 className='mx-4'>Liatrio Readme matching game</h1>
    <p className='mx-4'>Matches: {score}</p>
    <p className='mx-4'>Tries: {tries}</p>
    </div>
    </>
  )
}

export default HeaderContainer