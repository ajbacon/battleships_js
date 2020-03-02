import React from 'react';
import Row from '../GridRow/GridRow';
import Grid from '../../models/grid/grid';

class GridDisplay extends React.Component {
  state = {
    model: new Grid()
  };
  renderRows = () => {
    let res = [];
    for (let i = 0; i < 10; i++) {
      res.push(
        <Row
          key={`row${i}`}
          id={`row${i}`}
          model={this.state.model}
          yCoord={i}
        />
      );
    }
    return res;
  };

  render() {
    return <div data-test='component-grid-display'>{this.renderRows()}</div>;
  }
}

export default GridDisplay;
