import React, {Component} from 'react';
import Message from './Message';
import InputBox from './InputBox';
import ColorPick from './ColorPick';
import { withTracker } from 'meteor/react-meteor-data';

import { Messages } from '../api/messages.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.createText = this.createText.bind(this);
    this.resetInput = this.resetInput.bind(this);
    this.handleChangeComplete = this.handleChangeComplete.bind(this)
    this.state = {
      input: {x:0, y:0, visible:false},
      color: '#fff'
    };
  }
  
 createText(e) {
   if (!this.state.input.visible) {
     this.setState({input:{x:e.nativeEvent.clientX, y:e.nativeEvent.clientY, visible:true}})
    }
  }

  resetInput(){
    this.setState({input: {x:0, y:0, visible:false}})
    }
  
  handleChangeComplete(color) {
      this.setState({ color: color.hex });
    };
  
  render() {
    return(
      <div>
        <ColorPick colorChange={this.handleChangeComplete} color={this.state.color}/>
        <div  onClick={this.createText} className="fullpage">
          {this.props.messages.map((element) => 
          (<Message 
            x={element.x} 
            y={element.y} 
            text={element.text} 
            date={element.createdAt} 
            key={element.id}
            color={element.color} ></Message>)
          )}
          { this.state.input.visible ? 
          <InputBox 
          x={this.state.input.x} 
          y={this.state.input.y}
          messageSent={this.resetInput}
          color={this.state.color} /> : null }
        </div>
      </div>
    );
  }
}
  

export default withTracker(() => {
  Meteor.subscribe('messages');
  date = new Date()
  date.setTime(date - 20000)
  return {messages: Messages.find({ createdAt: { $gte:  date } }).fetch(),
};
})(App);
