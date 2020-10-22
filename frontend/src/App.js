import React from 'react';
import './App.css';

import Router from './Router';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div className="App">
      <header className="App-header">
        <h1>Mailpy - MGMT</h1>
        <Router/>
      </header>
    </div>
  }
}

export default App;
