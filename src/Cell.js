import React, { Component } from 'react';

class Cell extends Component {
  render() {
    return <rect width="30" 
    height="30"
    fill={this.props.color || "white"}
    x={this.props.col*30} 
    y={this.props.row*30} 
    stroke="lightgray" 
    strokeWidth={1}></rect>
  }
}

export default Cell;