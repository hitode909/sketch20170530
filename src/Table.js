import React, { Component } from 'react';

class Table extends Component {
  
  render() {
    return (
      <div>
        {this.props.field.map(row => this.renderRow(row))}
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

Table.defaultProps = {field: []};

export default Table;
