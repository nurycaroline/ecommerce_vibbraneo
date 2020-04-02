import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Deal from '../pages/Deal';
import NewDeal from '../pages/NewDeal';
import MyDeal from '../pages/MyDeal';
import MyInvites from '../pages/MyInvites';

const routes = [
  { path: '/', component: Deal },
  { path: '/new-deal', component: NewDeal },
  { path: '/my-deal', component: MyDeal },
  { path: '/my-invites', component: MyInvites },
];

function Router() {
  return (
    <Switch>
      {routes.map(r => (
        <Route
          key={r.path}
          exact
          path={r.path}
          component={r.component}
        />
      ))}
    </Switch>
  );
}

export default Router;
