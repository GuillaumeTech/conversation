import React, {Component} from 'react';
import {Messages} from '../api/messages.js';


class InputBox extends Component {
  constructor(props) {
    super(props);
    //this.handleSubmit = this.handleSubmit.bind(this)
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
  
    Messages.insert({
      text: text,
      x: this.props.x,
      y: this.props.y,
      createdAt: new Date(), // current time
    });
 
    this.messageInput.value = '';
    this.props.messageSent()
  }
 

  render() {
    return(
      <form onSubmit={this.handleSubmit} >
      <input ref={this.inputRef} className="input" style={{position: "absolute", top: this.props.y+"px", left: this.props.x+"px"}}>
      </input>
      </form>
    );
  }
  
}

export default InputBox;
