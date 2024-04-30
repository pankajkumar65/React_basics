import React from 'react'

const FunctionClicks = () => {
   function clickHandler(){
     console.log('button clicked')
   }
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default FunctionClicks
