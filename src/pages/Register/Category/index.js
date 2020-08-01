import React from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';

function RegisterCategory () {
  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>

      <form action="">
        <label>
          Nome da Categoria:
          <input type="text" />
        </label>

        <button>
          Cadastrar
        </button>
      </form>

      <Link to="/">
        Ir para a home
      </Link>
    </PageDefault>
  );
}

export default RegisterCategory;