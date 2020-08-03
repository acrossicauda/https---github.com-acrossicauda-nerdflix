import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './pages/Home';
import CadastroVideo from './pages/Video';
import CadastroCategoria from './pages/Categoria';
import PageNotFound from './pages/PageNotFound';

import {  BrowserRouter, Switch, Route  } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/cadastro/video" component={CadastroVideo} />
        <Route path="/cadastro/categoria" component={CadastroCategoria} />
        <Route path="/" component={App} exact />
        <Route component={PageNotFound} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

