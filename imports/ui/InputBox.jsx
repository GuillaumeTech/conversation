import React, {Component} from 'react';
import {Messages} from '../api/messages.js';


class InputBox extends Component {
  constructor(props) {
    super(props);
    this.messageInput = null
    this.inputRef = (input) => { this.messageInput = input; }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount(){
    this.messageInput.focus(); 
 }
  
  handleSubmit(event) {
    event.preventDefault();
    
    
    const text = this.messageInput.value
    
    Meteor.call('messages.insert', text, this.props.x, this.props.y, new Date(),this.props.color);
 
    this.messageInput.value = '';
    this.props.messageSent()
  }
 

  render() {
    return(
      <div style={{position: "absolute", top: this.props.y+"px", left: this.props.x+"px", color:this.props.color}}>
      <form onSubmit={this.handleSubmit}  >
      <input ref={this.inputRef} className="input" >
      </input>

      </form>
      <button className='button-cancel' onClick={this.props.messageSent} > Cancel</button>
      </div>
    );
  }
  
}

export default InputBox;
