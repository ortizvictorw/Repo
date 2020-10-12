import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Fondo from '../pages/Fondo';
import Menu from '../pages/Menu';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Fondo}/>
        <Route exact path="/menu" component={Menu}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
