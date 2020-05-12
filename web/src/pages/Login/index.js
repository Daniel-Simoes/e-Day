import React, { useState } from 'react';
import api from '../../services/api';

export default function Login() {
  const [email, setEmail] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await api.post('/sessions', { email });

    const { _id } = response.data;

    localStorage.setItem('user', _id);
  }

  return (
    <>
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
    </>
  )
}