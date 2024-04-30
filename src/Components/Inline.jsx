import React from 'react'

const heading ={
    fontSize:'40px',
    color:'orange'
}

function Inline() {
  return (
    <div>
      <h1 className='error'>error</h1>
      <h1 style={heading}>Inline</h1>
    </div>
  )
}

export default Inline
