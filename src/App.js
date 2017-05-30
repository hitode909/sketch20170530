import React, { Component } from 'react';
import Table from './Table';

class App extends Component {
  render() {
    const tick = (size, step) => {
      const radius = step % size;
      const center = size / 2;
      const distance = (x,y) => Math.sqrt((center-x)*(center-x)+(center-y)*(center-y));
      const rows = [];
      for(var y=0; y < size; y++) {
        const row = [];
        for(var x=0; x < size; x++) {
          var d = distance(x,y);
          if (d < radius-(size/4)) {
            row.push(false);
          } else if (d < radius) {
            row.push(true);
          } else {
            row.push(false);
          }
        }
        rows.push(row);
      }
      return rows;
    };
    return (
      <Table size="16" tick={tick} />
    );
  }
}

export default App;
