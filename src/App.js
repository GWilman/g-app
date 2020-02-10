import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Routes from './Routes';
import './lib/fontawesome';
import './App.scss';

function App() {

  const [theme, setTheme] = useState('dark');

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <div className={'app ' + theme}>
    <Router>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main>
          <Routes />
        </main>
      </Router>
    </div>
  );
}

export default App;
