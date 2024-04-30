import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Greet} from "./Components/Greet"
import Welcome from './Components/Welcome'
import Hello from './Components/Hello'
import Message from './Components/Message'
import Counter from './Components/Counter'
import FunctionClicks from './Components/FunctionClicks'
import Click from './Components/Click'
import EventBind from './Components/EventBind'
import Parentcomponent from './Components/Parentcomponent' 
import UserGreeting from './Components/UserGreeting'
import NameList from './Components/NameList'
import NameList2 from './Components/NameList2'
import Stylesheet from './Components/Stylesheet'
import Inline from './Components/Inline'
import './appstyle.css'
import style from './appStyle.module.css'
import Form from './Components/Form'
import LifecycleA from './Components/LifecycleA'
import FragmentDemo from './Components/FragmentDemo'
import Table from './Components/Table'
 
function App() {
  return (
    <div className='App'>
       <Table/>
      {/* <FragmentDemo/> */}
      {/* <LifecycleA/> */}
      {/* <Form/> */}
      {/* <h1 className='error'>error</h1>
      <h1 className={style.success}>Success</h1> */}
      {/* <Inline/> */}
      {/* <Stylesheet primary={false}/> */}
      {/* <NameList2/> */}
      {/* <UserGreeting/> */}
      {/* <Parentcomponent/> */}
      {/* <EventBind/> */}
      {/* <Click/> */}
       {/* <FunctionClicks/> */}
      {/* <Counter/>  */}
      {/* <Message/> */}
      {/* <Greet name='candy' heroname='Batman'>
        <p>This is children props</p>
      </Greet>
      <Greet name='Sams' heroname='supername'>
        <button>Action</button>
      </Greet>
      <Greet name='Ealy' heroname='wonderwomen'/> */}
      {/* <Welcome heroname='Batman'/>
      <Welcome heroname='supername'/>
      <Welcome heroname='wonderwomen'/> */}
      {/* <Hello/> */}
    </div>
  )
}

export default App
