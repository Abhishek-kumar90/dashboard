import React from 'react';
import { CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <CssBaseline />
      <Navbar />
      <Dashboard />
    </div>
  );
};

export default App;
