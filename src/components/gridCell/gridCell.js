import React from 'react';
import Classes from './GridCell.module.css';

class GridCell extends React.Component {
  render() {
    return (
      <div
        onClick={this.props.onClick.bind(this, this.props.coord)}
        className={Classes.GridCell}
        data-test='component-grid-cell'
      >
        {this.props.cellData.value}
      </div>
    );
  }
}

export default GridCell;
