import React from 'react';
import Cell from '../GridCell/GridCell';
import Classes from './GridRow.module.css';

class GridRow extends React.Component {
  renderCells = () => {
    let res = [];
    for (let i = 0; i < 10; i++) {
      res.push(
        <Cell
          coord={[this.props.yCoord, i]}
          key={`${this.props.player}_${this.props.id}_c${i}`}
          id={`${this.props.player}_${this.props.id}_c${i}`}
          cellData={this.props.cells[i]}
          onClick={this.props.onClick}
          data-test='component-grid-cell'
        />
      );
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
