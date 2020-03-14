import React from 'react';
import Game from './components/Game/Game';
import './App.css';
import Classes from './App.module.css';

class App extends React.Component {
  render() {
    return (
      <div className={Classes.App} data-test='component-app'>
        <Game />
      </div>
    );
  }
}

export default App;
