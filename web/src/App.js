import React, { useState } from 'react';
import api from './services/api';

import './App.css';

import logo from './assets/logo.png';

  function App({ history }) {
  const [email, setEmail] = useState('');

  async function handleSubmit(event) {
      event.preventDefault();

      const response = await api.post('/sessions', { email });

      console.log(response);
}
  
  return (
    <div className="container">
      <img src={logo} alt="e'Day" />
    

    <div className="content">
      <p>
      Introduce your  <strong>Company</strong> to new  <strong>talent</strong> and win an admirer.
      </p>

      <form onSubmit={handleSubmit}>
      <label htmlFor="email">E-MAIL *</label>
      <input
          type="email"
          id="email"
          placeholder="email"
          value={email}
          onChange={event => setEmail(event.target.value)}
          
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