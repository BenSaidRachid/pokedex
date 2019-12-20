import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home'
import Detail from './pages/Detail'
import Page404 from './pages/PageNotFound'
import { urls } from './helpers'

function App() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={urls.root} component={Home} />
          <Route exact path={urls.pokemons.base} component={Home} />
          <Route exact path={urls.pokemons.getOne()} component={Detail} />
          <Route component={Page404} />
        </Switch>
      </BrowserRouter>
    );
}

export default App;
