import React from 'react';
import {Link} from 'react-router-dom'
import { Form, Input } from '@rocketseat/unform'

import logo from '~/assets/logo.svg'

export default function SingnUp() {
  function handleSubmit(data){
    console.tron.log(data)
  }

  return (
    <>
      <img src={logo} alt="go-barber"/>

      <Form onSubmit={handleSubmit}>
        <Input type="text" name="name" placeholder="Nome Completo" id=""/>
        <Input type="email" name="email" placeholder="seu email" id=""/>
        <Input type="password" placeholder="sua senha" name="password" id=""/>

        <button type="submit"> Acessar </button>
        <Link to="/"> Tenho uma conta </Link>
      </Form>
    </>
  );
}
