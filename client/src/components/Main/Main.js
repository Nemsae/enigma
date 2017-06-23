import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Enigma from '../Enigma';

const Main = () => (
  <div>
    <Switch>
      <Route path='/' component={Enigma} />
      <Route path='/:passphrase' component={Enigma} />
      {/* <Route path='/roster' component={Roster} />
      <Route path='/schedule' component={Schedule} /> */}
    </Switch>
  </div>
);

export default Main;
