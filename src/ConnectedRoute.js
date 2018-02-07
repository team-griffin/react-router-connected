import addLocation from './addLocation';
import { Route } from 'react-router-dom';

const ConnectedRoute = addLocation(Route);

export default ConnectedRoute;