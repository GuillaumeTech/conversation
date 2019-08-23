import React, {Component} from 'react';

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {opacity:1}
    this.opacityUpdate = this.opacityUpdate.bind(this)
    this.opacityUpdater = setInterval(this.opacityUpdate,1000)
  }
  
  opacityUpdate(){
    let newOpacity
    let date = new Date()
    let diff = date - this.props.date
    if (diff > 20000){
        newOpacity = 0
    } else {
        newOpacity = (20000 - diff)/20000
    }
    this.setState({opacity:newOpacity})
  }


  render() {
    return(
      <p style={{position: "absolute", top: this.props.y+"px", left: this.props.x+"px", opacity: this.state.opacity}} >
          {this.props.text}
      </p>
    );
  }
}

export default Message;
