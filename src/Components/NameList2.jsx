import React from 'react'

function NameList2() {
    const names = ['Bruce','Lione','John']
    const NameList = names.map((name,index) =>  <h2 key={index}>{index} {name}</h2> )
  return (
    <div>{NameList}</div>
  )
}

export default NameList2
