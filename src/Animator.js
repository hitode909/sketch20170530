import React, { Component } from 'react';
import Table from './Table.js';

class Animator extends Component {
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
        <Table field={this.state.field} />
      </div>
    );
  }
}

Animator.defaultProps = {
  size: 1,
  tick: () => [],
};

export default Animator;
