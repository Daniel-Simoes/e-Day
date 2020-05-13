import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import './styles.css'

export default function Profile() {
  const [spots, setSpots]  = useState([]);

  useEffect(() => {
    async function loadSpots() {
        const user_id = localStorage.getItem('user');
        const response = await api.get('/profile', {
          headers: { user_id }
				}
			);

        setSpots(response.data);
        }     
        loadSpots();
    }, []);

    return (
    	<>
        <ul className="spot-list">
            {spots.map(spot => (
                <li key={spot._id}>
                    <header style={{ backgroundImage: `url(${spot.thumbnail_url})` }} />
                    <strong>{spot.company}</strong>
                </li>
            ))}
        </ul>
						<Link to="/newRegister">
                <button className="btn">
                    Register a new Company
                </button>
            </Link>
						<button type="submit" className="btnBack">Log out</button>
				
			</>
		)
	}