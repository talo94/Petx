import React from 'react';
import { Nav, NavLink } from './styles';
import { MdHome, MdFavorite, MdPerson } from 'react-icons/md';

const size = '32px';

export const NavBar = () => {
  return (
    <Nav>
      <NavLink to='/'><MdHome size={size} /></NavLink>
      <NavLink to='/favorites'><MdFavorite size='28px' /></NavLink>
      <NavLink to='/users'><MdPerson size='32px' /></NavLink>
    </Nav>
  );
};
