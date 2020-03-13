import React from 'react';
import GridPlayer from '../GridPlayer/GridPlayer';
import GridComputer from '../GridComputer/GridComputer';
import Classes from './Game.module.css';

class App extends React.Component {
  render() {
    return (
      <div className={Classes.Game} data-test='component-game'>
        <div style={{ margin: 20 }}>
          <GridPlayer />
        </div>
        <div style={{ margin: 20 }}>
          <GridComputer />
        </div>
      </div>
    );
  }
}

export default App;
