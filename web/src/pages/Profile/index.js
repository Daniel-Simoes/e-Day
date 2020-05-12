import React, { useEffect, useState } from 'react';
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
                    <header />
                    <strong>{spot.company}</strong>
                </li>
            ))}
        </ul>
			</>
		)
	}