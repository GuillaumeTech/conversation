import React, {Component} from 'react';
import Message from './Message';
import InputBox from './InputBox'

import '../imports/api/messages.js';


class App extends Component {

  constructor(props) {
    super(props);
    this.createText = this.createText.bind(this);
    this.state = {
      contents: [],
      input: {x:0, y:0, text:"", visible:false}
    };
  }
  
 createText(e) {
   if (!this.state.input.visible) {
     this.setState({input:{x:e.nativeEvent.clientX, y:e.nativeEvent.clientY, text: "a", visible:true}})
    }
  }

  render() {
    return(
      <div  onClick={this.createText} className="fullpage">
          {this.state.contents.map((element) => 
          (<Message x={element.x} y={element.y} text={element.text} ></Message>)
          )}
          { this.state.input.visible ? <InputBox x={this.state.input.x} y={this.state.input.y} /> : null }
      </div>
    );
  }
  
}

export default App;
