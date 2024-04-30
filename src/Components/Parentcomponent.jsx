import React, { Component } from 'react'
import ChildComponent from './ChildComponent' 

 class Parentcomponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message : 'parent'
      }
      this.greetparent = this.greetparent.bind(this)
    }
    
    greetparent(childName){
        alert(`hello ${this.state.message} from ${childName}`)
    }
  render() {
    return (
      <div>
        <ChildComponent GreetHandler={this.greetparent}/>
      </div>
    )
  }
}

export default Parentcomponent
