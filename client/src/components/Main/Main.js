import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Enigma from '../Enigma';

const Main = () => (
  <div>
    <Switch>
      <Route path='/' component={Enigma} />
    </Switch>
  </div>
);

export default Main;
