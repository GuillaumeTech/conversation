import React, {Component} from 'react'
import { CompactPicker } from 'react-color'

class ColorPick extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayColorPicker: false,
          };
      }

  handleClick = (e) => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
    e.stopPropagation()    
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false })
  };

  render() {
    const popover = {
      position: 'absolute',
      zIndex: '2',
    }
    const cover = {
      position: 'fixed',
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px',
    }

    return (
      <div style={{ padding:"1rem" }} >
        <button className="button-color" onClick={ this.handleClick }>Pick Color</button>
        { this.state.displayColorPicker ? <div style={ popover }>
          <div style={ cover } onClick={ this.handleClose }/>
          <CompactPicker color={ this.props.color}
    onChangeComplete={ this.props.colorChange } />
        </div> : null }
      </div>
    )
  }
}

export default ColorPick;