import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Routes from './Routes';
import './App.scss';

function App() {
  return (
    <div className="App">
    <Router>
        <Navbar />
        <main>
          <Routes />
        </main>
      </Router>
    </div>
  );
}

export default App;
