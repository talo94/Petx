import React from 'react';
import { Home } from './pages/Home';
import { GlobalStyle } from './styles/GlobalStyles';
import { Logo } from './components/Logo';
import { Router } from '@reach/router';

export const App = () => (
  <>
    <GlobalStyle />
    <Logo />
    <Router>
      <Home path='/' />
      <Home path='/pet/:categoryId' />
    </Router>
  </>
);
