import React, { Component } from 'react';
import Navbar from './components/navbar';
import Filter from './components/filter';
import Chart from './components/chart';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar />
      <Filter />
      <Chart />
      </div>
    );
  }
}

export default App;
