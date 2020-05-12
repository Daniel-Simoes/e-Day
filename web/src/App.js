import React from 'react';
import './App.css';
import logo from './assets/logo.png';
import Routes from './routes';

export default function App() {
  return (
    <div className="container">
        <img src={logo} alt="e'Day" /> 
    <div className="content">
     <Routes />
      </div>
      </div>
  );
}

