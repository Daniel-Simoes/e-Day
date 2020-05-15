import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Booking from './pages/Booking';

const Routes =  createAppContainer(
    createSwitchNavigator({
        Login,
        Dashboard,
        Booking,
    })
);
export default Routes; 