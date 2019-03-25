import React, { Component } from 'react';

export default class ColorBox extends Component {
  conditionalCode(opacity) {
    if (opacity > 0.2) {
      return (
          <ColorBox opacity={this.props.opacity - 0.1} />
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        {this.conditionalCode(this.props.opacity)}
      </div>
    )
  }
  
}
