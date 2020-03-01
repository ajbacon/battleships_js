import React from 'react';
import Cell from '../GridCell/GridCell';
import Classes from './GridRow.module.css';

class GridRow extends React.Component {
  renderCells = () => {
    let res = [];
    for (let i = 0; i < 10; i++) {
      res.push(<Cell />);
    }
    return res;
  };

  render() {
    return (
      <div className={Classes.GridRow} data-test='component-grid-row'>
        {this.renderCells()}
      </div>
    );
  }
}

export default GridRow;
