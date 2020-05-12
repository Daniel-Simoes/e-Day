import React, { useState, useMemo } from 'react';
import api from '../../services/api';
import camera from '../../assets/camera.png';

import './styles.css';

export default function New({ history }) {
    const [thumbnail, setThumbnail] = useState(null);
    const [company, setCompany] = useState('');
    const [techs, setTechs] = useState('');

    const preview = useMemo(() => {
      return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail])
     
    async function handleSubmit(event) {
      event.preventDefault();
      
      const data = new FormData();
      const user_id = localStorage.getItem('user');

      data.append('thumbnail', thumbnail);
      data.append('company', company);
      data.append('techs', techs);

      await api.post('/spots', data, {
        headers: { user_id }
    });

    history.push('/profile');
    }

    return (
        <form onSubmit={handleSubmit}>
              <label 
                id="thumbnail" 
                style={{ backgroundImage: `url(${preview})`}}
                className={thumbnail ? 'has-thumbnail' : ''}>
                <input type="file" onChange={event => setThumbnail(event.target.files[0])}/>
                <img className="imgUpdate" src={camera} alt="Select img" />
              </label>

            <label htmlFor="company">COMPANY *</label>
            <input
                id="company"            
                placeholder="name"
                value={company}
                onChange={event => setCompany(event.target.value)}
            />

            <label htmlFor="techs">TECHNOLOGIES * <span>(comma-separated)</span></label>
            <input
                id="techs"            
                placeholder="what tech use"
                value={techs}
                onChange={event => setTechs(event.target.value)}
            />
            <button type="submit" className="btn">Register</button>
        </form>
    )
}