import React from 'react';
import Classes from './GridCell.module.css';

class GridCell extends React.Component {
  render() {
    return (
      <div className={Classes.GridCell} data-test='component-grid-cell'>
        -
      </div>
    );
  }
}

export default GridCell;
