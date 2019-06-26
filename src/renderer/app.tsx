import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ContextProvider } from './context/index';
import Home from './container/home';
import Profile from './container/profile';

const App = () => (
  <ContextProvider>
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/profile" component={Profile} />
    </BrowserRouter>
  </ContextProvider>
);
export default App;
