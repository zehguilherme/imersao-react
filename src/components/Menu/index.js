import React from 'react';

import './Menu.css';

import { Link } from 'react-router-dom';
import Button from '../Button';
import Logo from '../../assets/img/netflix-logo.png';

function Menu () {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="JoseFlix" />
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;
