import React from 'react';
import Service from '../../services';
import Page from './Page';

export default function Login({ setLogged }) {
  const handleAuthenticate = async (user, pass) => {
    const res = await Service.Login.postAuthenticate(user, pass);
    if (res.token) {
      localStorage.setItem('user', JSON.stringify(res));
      setLogged();
    }
  };

  return <Page handleAuthenticate={handleAuthenticate} />;
}
