import React, { useState, useMemo } from 'react';
import camera from '../../assets/camera.png';

import './styles.css';

export default function New({ history }) {
    const [thumbnail, setThumbnail] = useState(null);
    const [company, setCompany] = useState('');
    const [techs, setTechs] = useState('');

    const preview = useMemo(() => {
      return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail])
    

    async function handleSubmit() {
       
    }

    return (
        <form onSubmit={handleSubmit}>
              <label id="thumbnail" style={{ backgroundImage: `url(${preview})`}}>
                <input type="file" onChange={event => setThumbnail(event.target.files[0])}/>
                <img className="imgUpdate"src={camera} alt="Select img" />
            </label>

            <label htmlFor="company">COMPANY *</label>
            <input
                id="company"            
                placeholder="company name"
                value={company}
                onChange={event => setCompany(event.target.value)}
            />

            <label htmlFor="techs">TECHNOLOGIES * <span>(comma-separated)</span></label>
            <input
                id="techs"            
                placeholder="what technologies use"
                value={techs}
                onChange={event => setTechs(event.target.value)}
            />

            <button type="submit" className="btn">Register</button>
        </form>
    )
}