import logo from './logo.svg';
import './App.css';
import React from 'react';
// import ReactDOM from 'react-dom';
import RatingsList from './components/RatingsList';
import DeviceDataTable from './components/DeviceDataTable';

export function App() {
  return (
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
  );
}

export function App2() {
  return (
      <div className="App">
          <RatingsList />
      </div>
  );
}

export function App1() {
  return (
    <div className='App'>
      <h1>Device Data</h1>
      <DeviceDataTable />
    </div>
  );
}

// ReactDOM.render(App, document.getElementById(root));
// ReactDOM.render(App1, document.getElementById(root1));
// ReactDOM.render(App2, document.getElementById(root2));

// export function App;
// export function App1;
// export function App2;
