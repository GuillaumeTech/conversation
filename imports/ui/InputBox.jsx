import React, {Component} from 'react';

class InputBox extends Component {
  constructor(props) {
    super(props);
    //this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount(){
    this.Input.focus(); 
 }
  
  //handleSubmit(){ }
 

  render() {
    return(
      <input ref={(input) => { this.Input = input; }} onSubmit={this.handleSubmit} className="input" style={{position: "absolute", top: this.props.y+"px", left: this.props.x+"px"}}>
      </input>
    );
  }
  
}

export default InputBox;
