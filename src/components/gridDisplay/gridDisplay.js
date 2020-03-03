import React from 'react';
import Row from '../GridRow/GridRow';
import Grid from '../../models/grid/grid';

class GridDisplay extends React.Component {
  state = {
    model: new Grid()
  };

  onClick = coord => {
    const updatedModel = this.state.model;
    updatedModel.placeShip(coord, 4, 'H');
    this.setState({
      model: updatedModel
    });
    console.log(coord);
  };

  renderRows = () => {
    let res = [];
    let data = this.state.model.render();
    for (let i = 0; i < 10; i++) {
      res.push(
        <Row
          key={`row${i}`}
          id={`row${i}`}
          cells={data[i]}
          yCoord={i}
          onClick={this.onClick}
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
