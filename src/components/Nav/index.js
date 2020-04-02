import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Container, Item } from './styles';

const NAVIGATIONS = [
  {
    name: 'Negociações',
    path: '/',
    loader: './pages/Deal',
  },
  {
    name: 'Criar Negociação ',
    path: '/new-deal',
    loader: './pages/NewDeal',
  },
  {
    name: 'Minhas Negociações ',
    path: '/my-deal',
    loader: './pages/MyDeal',
  },
  {
    name: 'Meus Convites ',
    path: '/my-invites',
    loader: './pages/MyInvites',
  },
];

const Nav = () => {
  const [select, setSelect] = useState(window.location.pathname);
  
  return (
    <Container>
      <ul>
        {NAVIGATIONS.map(nav => (
          <Item
            key={nav.name}
            active={select === nav.path}
            onClick={() => setSelect(nav.path)}>
            <Link to={nav.path}>{nav.name}</Link>
          </Item>
        ))}
      </ul>
    </Container>
  );
};

export default Nav;
