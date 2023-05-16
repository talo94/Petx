import React from 'react';
import { Home } from './pages/Home';
import { GlobalStyle } from './styles/GlobalStyles';
import { Logo } from './components/Logo';
import { Detail } from './pages/Detail';
import { Router } from '@reach/router';
import { NavBar } from './components/NavBar';
import { Users } from './pages/Users';
import { Favorites } from './pages/Favorites';
import { NotRegisterUser } from './pages/NotRegisterUser';
import OverviewContext from './contexts/OverviewContext';
import { SignIn } from './pages/SignIn';

export const App = () => (
  <>
    <GlobalStyle />
    <Logo />
    <Router>
      <Home path='/' />
      <Home path='/pet/:categoryId' />
      <Detail path='/detail/:detailId' />
    </Router>
    <OverviewContext.Consumer>
      {({ isAuth }) =>
        isAuth
          ? (
            <Router>
              <Users path='/users' />
              <Favorites path='/favorites' />
            </Router>
            )
          : (
            <Router>
              <SignIn path='/users' />
              <SignIn path='/favorites' />
              <SignIn path='/login' />
              <NotRegisterUser path='/sign-up' />
            </Router>
            )}
    </OverviewContext.Consumer>
    <NavBar />
  </>
);
