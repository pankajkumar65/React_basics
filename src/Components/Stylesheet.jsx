import React from 'react'
import './Mystyle.css'
function Stylesheet(props) {
    let className = props.primary?"primary":" "
  return (
    <div className={`${className} font-xl`}>Stylesheet</div>
  )
}

export default Stylesheet
