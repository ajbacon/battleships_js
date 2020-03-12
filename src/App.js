import React from 'react';
import GridDisplay from './components/GridDisplay/GridDisplay';
import GridComputer from './components/GridComputer/GridComputer';
import './App.css';
import Classes from './App.module.css';

class App extends React.Component {
  render() {
    return (
      <div className={Classes.App} data-test='component-app'>
        <div style={{ margin: 20 }}>
          <GridDisplay />
        </div>
        <div style={{ margin: 20 }}>
          <GridComputer />
        </div>
      </div>
    );
  }
}

export default App;
