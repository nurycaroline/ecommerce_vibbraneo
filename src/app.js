import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Router from './router';
import Login from './pages/Login';
import Service from './services';
import Header from './components/Header';
import Nav from './components/Nav';
import GlobalStyled from './styles/globalStyled';
import ThemeStyled from './styles/themeStyled';

function App() {
  const [logged, setLogged] = useState(false);
  const [user, setUser] = useState('');

  useEffect(() => {
    const handleLogin = async () => {
      const resp = await Service.Login.postAuthenticateSSO();
      if (resp && resp.token) {
        setLogged(true);
        setUser(resp.user);
      }
    };
    handleLogin();
  }, []);

  const handleLogout = () => {
    setLogged(false);
    localStorage.removeItem('user');
  };

  return !logged ? (
    <ThemeProvider theme={ThemeStyled}>
      <GlobalStyled />
      <Login setLogged={() => setLogged(true)} />
    </ThemeProvider>
  ) : (
    <BrowserRouter>
      <ThemeProvider theme={ThemeStyled}>
        <div className='App'>
          <main>
            <Header
              userName={user.name}
              handleLogout={handleLogout}
            />
            <Nav />
            <Router />
          </main>
          <GlobalStyled />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
