import React, { Component } from 'react';
import Animator from './Animator';

var defaultCode = `function (size, step) {
  var radius = step % size;
  var center = size / 2;
  var distance = function (x,y) {
    return Math.sqrt((center-x)*(center-x)+(center-y)*(center-y));
  };
  var rows = [];
  for(var y=0; y < size; y++) {
    var row = [];
    for(var x=0; x < size; x++) {
      var d = distance(x, y);
      if (d < radius - (size / 4)) {
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
}`;

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      code: defaultCode,
      size: 16,
      tickFunction: eval(`(${defaultCode})`),
      error: false,
    };
  }
  
  codeChanged (event) {
    const code = event.target.value;
    let tickFunction = this.state.tickFunction;
    let error = false;
    try {
      let f = eval(`(${code})`);
      tickFunction = f;
    } catch (_) {
      error = true;
    }
    this.setState({
      code: code,
      tickFunction: tickFunction,
      error: error,
    });
  }
  render() {
    return (
      <div>
        <Animator size={this.state.size} tick={this.state.tickFunction} />
        <textarea style={{position: "absolute", top: 0, right: 0, height: "100%", width: "50%", background: this.state.error ? '#ffeeee' : '#eeeeff'}} value={this.state.code} onChange={this.codeChanged.bind(this)}/>
      </div>
    );
  }
}

export default App;
