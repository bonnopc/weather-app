import React, { Component } from 'react';
<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';
=======
import { BrowserRouter } from "react-router-dom";
import Route from "../src/route";
>>>>>>> 2c18b496bcf310c3b0d5841198dbe5f620adc1f3

class App extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
=======
      <BrowserRouter>
        <Route/>
      </BrowserRouter>
>>>>>>> 2c18b496bcf310c3b0d5841198dbe5f620adc1f3
    );
  }
}

export default App;
