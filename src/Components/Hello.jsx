import React from 'react'

const Hello = () => {
    // return(
    //     <div>
    //         <h1>Hello Vishwas</h1>
    //     </div>
    // )

   return React.createElement('div',
   {id:'Hello',className:'dummyclass'},
   React.createElement('h1',null,"Hello vishwas"));
}
 export default Hello
