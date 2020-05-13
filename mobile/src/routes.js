import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Book from './pages/Booking';

const Routes =  createAppContainer(
    createSwitchNavigator({
        Login,
        Dashboard,
        Book
    })
);
export default Routes; 