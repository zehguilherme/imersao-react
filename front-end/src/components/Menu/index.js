import React from 'react';

import './Menu.css';
import Button from '../Button';

import Logo from '../../assets/img/netflix-logo.png';

function Menu () {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="JoseFlix" />
      </a>

      <Button as="a" className="ButtonLink" href="/">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;
