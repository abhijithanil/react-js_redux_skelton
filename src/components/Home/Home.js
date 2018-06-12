import React, { Component } from 'react';
import logo from '../../../public/img/logo.svg';
class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React-Redux Skelton</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/views/MainFrame/MainFrame.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Home;