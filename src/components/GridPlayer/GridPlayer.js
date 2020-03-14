import React from 'react';
import Row from '../GridRow/GridRow';
import Grid from '../../models/grid/grid';
import Classes from './GridPlayer.module.css';

class GridPlayer extends React.Component {
  state = {
    model: new Grid(),
    orientation: 'H',
    shipLength: '4'
  };

  handleCellClick = coord => {
    this.props.model.placeShip(
      coord,
      this.state.shipLength,
      this.state.orientation
    );
    // const updatedModel = this.state.model;
    // updatedModel.placeShip(
    //   coord,
    //   this.state.shipLength,
    //   this.state.orientation
    // );
    // this.setState({
    //   model: updatedModel
    // });
  };

  toggleOrientation = () => {
    this.setState({
      orientation: this.state.orientation === 'H' ? 'V' : 'H'
    });
  };

  toggleShipLength = e => {
    this.setState({
      shipLength: parseInt(e.target.value)
    });
  };

  renderRows = () => {
    let res = [];
    let data = this.props.model.render();
    for (let i = 0; i < 10; i++) {
      res.push(
        <Row
          key={`r${i}`}
          id={`r${i}`}
          cells={data[i]}
          yCoord={i}
          onClick={this.props.onClick}
        />
      );
    }
    return res;
  };

  render() {
    return (
      <div data-test='component-grid-player'>
        <div className={Classes.GridPlayer}>{this.renderRows()}</div>

        <div>
          <button
            onClick={this.props.toggleOrientation}
            data-test='orientation-btn'
          >
            Orientation {this.props.orientation}
          </button>
          <button
            value='5'
            onClick={this.props.toggleShipLength}
            data-test='ship5-btn'
          >
            5
          </button>
          <button
            value='4'
            onClick={this.props.toggleShipLength}
            data-test='ship4-btn'
          >
            4
          </button>
          <button
            value='3'
            onClick={this.props.toggleShipLength}
            data-test='ship3-btn'
          >
            3
          </button>
          <button
            value='2'
            onClick={this.props.toggleShipLength}
            data-test='ship2-btn'
          >
            2
          </button>
        </div>
      </div>
    );
  }
}

export default GridPlayer;
