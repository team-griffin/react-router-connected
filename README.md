# react-router-connected

This project is designed to help against sCU problems when using `react-redux` with `react-router`.

This only works if your application already uses `react-router-redux`.

## Install

`npm install --save @team-griffin/react-router-connected`

`yarn add @team-griffin/react-router-connected`

## Usage
Use exactly how you would an unconnected `Route` or `Switch`

```javascript
import { ConnectedRoute, ConnectedSwitch } from '@team-griffin/react-router/connected';
// Exported without prefix for those who want it cleaner
import { Route, Switch } from '@team-griffin/react-router/connected';

<ConnectedRoute path="/" component={MyComponent}/>
<ConnectedSwitch>
  <ConnectedRoute path="/" component={MyComponent}/>
</ConnectedSwitch>
```