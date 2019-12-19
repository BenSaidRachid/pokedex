import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home'
import Page404 from './pages/PageNotFound'

function App() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={Page404} />
        </Switch>
      </BrowserRouter>
    );
}

export default App;
