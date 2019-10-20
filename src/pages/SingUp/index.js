import React from 'react';
import {Link} from 'react-router-dom'
import { Form, Input } from '@rocketseat/unform'

import * as Yup from 'yup';

import logo from '~/assets/logo.svg'

export default function SingnUp() {

  const schema = Yup.object().shape({
    name: Yup.string().required('O nome é obrigatório'),
    email: Yup.string().email('Insira um email Válido!').required('Email Obrigatório'),
    password: Yup.string().required('Favor insira sua senha').min('Asenha precisa conter no mínimo 6 chars')
  });

  function handleSubmit(data){
    console.tron.log(data)
  }

  return (
    <>
      <img src={logo} alt="go-barber"/>

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input type="text" name="name" placeholder="Nome Completo" id=""/>
        <Input type="email" name="email" placeholder="seu email" id=""/>
        <Input type="password" placeholder="sua senha" name="password" id=""/>

        <button type="submit"> Acessar </button>
        <Link to="/"> Tenho uma conta </Link>
      </Form>
    </>
  );
}
