import React, { Component } from 'react'

export class Click extends Component {
    clickhandler(){
        console.log("button clicked")
    }
  render() {
    return (
      <div>
        <button onClick={this.clickhandler}>Click me</button>
      </div>
    )
  }
}

export default Click
