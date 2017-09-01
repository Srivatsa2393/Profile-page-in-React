import React, { Component } from 'react';
import logo from './logo.svg';
import Image from './Image';
import Profile from './Profile';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image />
        <Profile />
      </div>
    );
  }
}

export default App;
