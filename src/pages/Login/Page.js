import React, { useState } from 'react';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Form, Logo, Title, GroupButtons } from './styles';

import ILogo from '../../assets/img/logo_login.png';

export default function Page({ handleAuthenticate }) {
  const [user, setuser] = useState('');
  const [pass, setpass] = useState('');

  return (
    <Container>
      <Logo src={ILogo} alt='logo' />
      <Form>
        <Title>Login</Title>

        <Input
          placeholder='usuário'
          type='text'
          value={user}
          onChange={e => setuser(e.currentTarget.value)}
        />

        <Input
          placeholder='senha'
          type='password'
          value={pass}
          onChange={e => setpass(e.currentTarget.value)}
        />

        <GroupButtons>
          <Button
            variant='secondary'
            type='button'
            onClick={() => handleAuthenticate(user, pass)}>
            criar conta
          </Button>
          <Button
            variant='primary'
            type='button'
            onClick={() => handleAuthenticate(user, pass)}>
            entrar
          </Button>
        </GroupButtons>
      </Form>
    </Container>
  );
}
