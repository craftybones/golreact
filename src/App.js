import React, { Component } from 'react';
import Cell from './Cell';
import {nextGeneration} from './_src/gameOfLife.js';

const genId = (a) => a.join("_");

const genCells = (colors) => {
  let cells = [];
  for(let i=0;i<17;i++) {
    for(let j=0;j<17;j++) {
      cells.push(<Cell row={i} col={j} color={colors[`${i}_${j}`]}/>);
    }
  }
  return cells;
}

const toColourLookup=(cells) => {
  let colors={};
  cells.forEach(cell => {
    colors[genId(cell)]="black"
  });
  return colors;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {gen: this.props.gen};
  }
  componentDidMount() {
    this.timerID = setInterval(()=>this.tick(),180)
  }
  tick() {
    this.setState((state,props)=>{
      let newState=nextGeneration(state.gen,{topLeft:[0,0],bottomRight:[17,17]});
      return {gen:newState};
    });
  }
  render() {
    let colors=toColourLookup(this.state.gen)
    let cells=genCells(colors);
    return (
      <div className="App">
        <svg width={800} height={800}>
          {cells}
        </svg>
      </div>
    );
  }
}

export default App;
