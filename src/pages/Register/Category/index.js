import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';

import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function RegisterCategory () {
  const initialValues = {
    name: '',
    description: '',
    color: '',
  };

  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState(initialValues);

  // Set all the values on the "onChange" functions of 'inputs'
  function setValue (key, value) {
    setValues({
      ...values, // all the values who already exists
      [key]: value, // take the value that was assigned to the "key" and define this line at this point, for the variable
      // key: variable value. Can be "name", "description"
      // name: 'value'
    });
  }

  function handleSubmit (e) {
    e.preventDefault();

    setCategories([
      ...categories, // add the previous categories who already exists
      values,
    ]);

    // Clear the inputs
    setValues(initialValues);
  }

  // Capture all changes on the inputs
  function handleChange (e) {
    const { getAttribute, value } = e.target;

    setValue(
      getAttribute('name'),
      value,
    );
  }

  useEffect(() => {
    const URL = 'http://localhost:8080/categories';

    fetch(URL)
      .then(async (responseServer) => {
        const response = await responseServer.json();
        setCategories([
          ...response,
        ]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {' '}
        {values}
      </h1>

      <form onSubmit={handleSubmit}>

        <FormField
          label="Nome da categoria"
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="description"
          value={values.description}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="color"
          value={values.color}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {categories.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categories.map((category) => (
          <li key={`${category.name}`}>
            {category.name}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para a home
      </Link>
    </PageDefault>
  );
}

export default RegisterCategory;
