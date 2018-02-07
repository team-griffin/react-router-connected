import addLocation from './addLocation';
import { Switch } from 'react-router-dom';

const ConnectedSwitch = addLocation(Switch);

export default ConnectedSwitch;