import React from 'react';
import { Link } from 'react-router-dom';

import ILogo from '../../assets/img/logo_login.png';
import ICLogout from '../../assets/icons/ic_logout.svg';

import { Container, UserName } from './styles';

function Header({ userName, handleLogout }) {
  return (
    <Container>
      <img src={ILogo} alt='Logo do E-commerce Vibbraneo' />
      <Link onClick={handleLogout} to='./'>
        <UserName>
          {userName} <img src={ICLogout} />
        </UserName>
      </Link>
    </Container>
  );
}

export default Header;
