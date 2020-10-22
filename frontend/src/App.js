import React from 'react';
import './App.css';

import Entries from './components/Entries';
import Groups from './components/Groups';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayEntries: true,
      diplayGroups: true
    }
  }

  toggleDisplayEntries = () => {
    this.setState(prevState => ({ displayEntries: !prevState.displayEntries }));
  }

  toggleDisplayGroups = () => {
    this.setState(prevState => ({ displayGroups: !prevState.displayGroups }));
  }


  render() {
    const { displayEntries, displayGroups } = this.state;
    return <div className="App">

      <header className="App-header">
        <h1>Mailpy - MGMT</h1>
        <button type='button' onClick={this.toggleDisplayEntries}>
          <label>{!displayEntries ? "Display Entries" : "Hide Entries"}</label>
        </button>
        <button type='button' onClick={this.toggleDisplayGroups}>
          <label>{!displayGroups ? "Display Group" : "Hide Groups"}</label>
        </button>
      </header>

      {displayEntries ? <Entries /> : ""}
      {displayGroups? <Groups/> : ""}
    </div>
  }
}

export default App;
