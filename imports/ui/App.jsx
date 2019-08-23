import React, {Component} from 'react';
import Message from './Message';
import InputBox from './InputBox';
import { withTracker } from 'meteor/react-meteor-data';

import { Messages } from '../api/messages.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.createText = this.createText.bind(this);
    this.resetInput = this.resetInput.bind(this);
    this.state = {
      input: {x:0, y:0, visible:false}
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
  

  render() {
    return(
      <div  onClick={this.createText} className="fullpage">
          {this.props.messages.map((element) => 
          (<Message x={element.x} y={element.y} text={element.text} date={element.datetime}></Message>)
          )}
          { this.state.input.visible ? 
          <InputBox 
          x={this.state.input.x} 
          y={this.state.input.y}
          messageSent={this.resetInput} /> : null }
      </div>
    );
  }
}
  

export default withTracker(() => {
  return {messages: Messages.find({}).fetch(),
};
})(App);
