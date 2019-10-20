import React from 'react';
import {Link} from 'react-router-dom'
import { Form, Input } from '@rocketseat/unform'

import * as Yup from 'yup';

import logo from '~/assets/logo.svg'

export default function SingnIn() {

  function handleSubmit(data){
    console.log(data)
  }

  return (
    <>
      <img src={logo} alt="go-barber"/>

      <Form onSubmit={handleSubmit}>
        <Input type="email" name="email" placeholder="seu email" id=""/>
        <Input type="password" placeholder="sua senha" name="password" id=""/>

        <button type="submit"> Acessar </button>
        <Link to="/register"> Criar uma conta Grátis</Link>
      </Form>
    </>
  );
}
