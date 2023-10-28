import React from 'react';
import '../pasta de estilos/Header.css';
import logo from '../logo.svg'

function Header() {
  return (
    <header className="header">
      <h1>Meu Site React</h1>
      <img src={logo} className="App-logo" alt="logo" />
    </header>
  );
}

export default Header;