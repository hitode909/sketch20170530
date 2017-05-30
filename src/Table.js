import React, { Component } from 'react';

class Table extends Component {
  constructor (props) {
    super(props);
    this.state = {
      step: 0,
      field: [],
    };
  }
  
  componentDidMount () {
    this.tick();
    this.timer = setInterval(() => { this.tick()}, 100);
  }
  
  componentWillUnmount () {
    alert('clear!');
    clearInterval(this.timer);
  }
  
  tick () {
    this.setState((state, props) => {
      const size = props.size;
      const step = ++state.step;
      return {
        field: props.tick(size, step),
        step: step,
      };
    });
  }
  
  render() {
    return (
      <div>
        <div>step {this.state.step}</div>
        <div>
          {this.state.field.map(row => this.renderRow(row))}
        </div>
      </div>
    );
  }
  
  renderRow(row) {
    return (
      <div>
        {row.map(item => this.renderItem(item))}
      </div>
    )
  }
  
  renderItem(item) {
    return (
      <span class="item">
        <input
          type="checkbox"
          checked={item}
        />
        
      </span>
    )
  }
}

Table.defaultProps = {tick: () => { [] } };

export default Table;
