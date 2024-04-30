import React, {Component} from 'react'

class Form extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         comments:'',
         Topic:'React'
      }
    }
    HandelUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    HandelCommentChange = (event) =>{
        this.setState({
            comments: event.target.value
        })
    }
    HandeltopicChange = (event) =>{
        this.setState({
            Topic: event.target.value
        })
    }
    handleSubmit = event => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.Topic}`)
        event.preventDefault()
    }
    render(){
        const {username,comments,Topic} = this.state
        return(
        <form onSubmit={this.handleSubmit}>  
          <div>
              <label>Username</label>
              <input type='text' value={username} onChange={this.HandelUsernameChange} />
          </div>
          <div>
            <label>Comments</label>
             <textarea value={comments} onChange={this.HandelCommentChange}/>
          </div>
          <div>
             <label>Topic:</label>
             <select value={Topic} onChange={this.HandeltopicChange}>
                <option value="React">React</option>
                <option value="Ang">Angular</option>
                <option value="Vue">Vue</option>
             </select>
          </div>
          <button type='submit'>Submit</button>
        </form>  
        ) 
    }
}
export default Form;    
