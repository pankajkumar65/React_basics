import react from "react";

// function Greet(){
//     return <h1>Hello Vishwas</h1>
// }

 export const Greet = (props) => { 
   const{name,heroname} = props
  return (
     <div>
        <h1>Hello {name} a.k.a {heroname}</h1>
        {/* <h1>{props.children}</h1> */}
     </div>
  )
}