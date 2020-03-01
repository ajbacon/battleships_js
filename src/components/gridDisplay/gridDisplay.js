import React from 'react';
import Row from '../GridRow/GridRow';

class GridDisplay extends React.Component {
  renderRows = () => {
    let res = [];
    for (let i = 0; i < 10; i++) {
      res.push(<Row />);
    }
    return res;
  };

  render() {
    return <div data-test='component-grid-display'>{this.renderRows()}</div>;
  }
}

export default GridDisplay;
