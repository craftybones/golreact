import React, { Component } from 'react';

class Cell extends Component {
  render() {
    return <rect width="10" 
    height="10"
    fill={this.props.color || "white"}
    x={this.props.col*10} 
    y={this.props.row*10} 
    stroke="lightgray" 
    strokeWidth={1}></rect>
  }
}

export default Cell;