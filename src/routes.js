import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Base from './components/base/component'
import Header from './components/base/header/component'
import NotFoundPage from './components/base/notfound/component'
import Flights from './components/flights/component'


export default (
  <Route path="/" component={Base}>
    <IndexRoute components={{ header: Header, main: Flights }} />
    <Route path="*" components={{ main: NotFoundPage }} />
  </Route>
);
