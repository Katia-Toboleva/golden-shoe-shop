import React from 'react';
import { Switch, Route } from 'react-router-dom';

import routes from '../routes';

const Page = () => (
  <Switch>
    {routes.map(({ props, component: Component }) => (
      <Route path={props.path} exact={props.exact} key={props.path}>
        <Component />
      </Route>
    ))}
  </Switch>
);

export default Page;
