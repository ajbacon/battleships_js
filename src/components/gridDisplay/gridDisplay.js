import React from 'react';
import Row from '../GridRow/GridRow';
import Grid from '../../models/grid/grid';

class GridDisplay extends React.Component {
  state = {
    model: new Grid(),
    orientation: 'H'
  };

  handleCellClick = coord => {
    const updatedModel = this.state.model;
    updatedModel.placeShip(coord, 4, this.state.orientation);
    this.setState({
      model: updatedModel
    });
  };

  toggleOrientation = () => {
    this.setState({
      orientation: this.state.orientation === 'H' ? 'V' : 'H'
    });
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
          onClick={this.handleCellClick}
        />
      );
    }
    return res;
  };

  render() {
    return (
      <div data-test='component-grid-display'>
        {this.renderRows()}
        <div>
          <button onClick={this.toggleOrientation} data-test='orientation-btn'>
            Orientation {this.state.orientation}
          </button>
        </div>
      </div>
    );
  }
}

export default GridDisplay;
