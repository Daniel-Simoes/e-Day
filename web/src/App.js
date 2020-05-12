import React from 'react';

import './App.css';

import logo from './assets/logo.png';

function App() {
  
  return (
    <div className="container">
      <img src={logo} alt="e'Day" />
    

    <div className="content">
      <p>
      Introduce your  <strong>Company</strong> to new  <strong>talent</strong> and win an admirer.
      </p>

      <form>
      <label htmlFor="email">E-MAIL *</label>
      <input
          type="email"
          id="email"
          placeholder="email"
          
      />
      

      <button type="submit" className="btn">Enter</button>
      </form>
      <div className="footer">
        <p>*A valide email is requeire</p>
      </div>
      </div>
      </div>
  );
}

export default App;