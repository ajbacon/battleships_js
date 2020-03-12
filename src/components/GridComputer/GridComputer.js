import React from 'react';
import Row from '../GridRow/GridRow';
import ComputerGrid from '../../models/computerGrid/computerGrid';

class GridComputer extends React.Component {
  state = {
    model: new ComputerGrid(),
    orientation: 'H',
    shipLength: '4'
  };

  handleCellClick = coord => {
    const updatedModel = this.state.model;
    updatedModel.placeShip(
      coord,
      this.state.shipLength,
      this.state.orientation
    );
    this.setState({
      model: updatedModel
    });
  };

  renderRows = () => {
    let res = [];
    let data = this.state.model.render();
    for (let i = 0; i < 10; i++) {
      res.push(
        <Row
          key={`r${i}`}
          id={`r${i}`}
          cells={data[i]}
          yCoord={i}
          onClick={this.handleCellClick}
        />
      );
    }
    return res;
  };

  render() {
    return <div data-test='component-grid-display'>{this.renderRows()}</div>;
  }
}

export default GridComputer;
