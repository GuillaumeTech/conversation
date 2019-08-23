import React, {Component} from 'react';

class Message extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return(
      <p style={{position: "absolute", top: this.props.Y+"px", left: this.props.x+"px"}} >
          this.props.text
      </p>
    );
  }
  
}

export default Message;
