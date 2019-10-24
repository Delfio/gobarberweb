import React from 'react';
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom'
import { Form, Input } from '@rocketseat/unform'

import * as Yup from 'yup';

import logo from '~/assets/logo.svg'

import { signUpRequest } from '~/store/modules/auth/actions'

export default function SingnUp() {
  const dispatch = useDispatch();

  const schema = Yup.object().shape({
    name: Yup.string().required('O nome é obrigatório'),
    email: Yup.string().email('Insira um email Válido!').required('Email Obrigatório'),
    password: Yup.string().required('Favor insira sua senha').min(6, 'Asenha precisa conter no mínimo 6 chars')
  });

  function handleSubmit({name, email, password}){
    dispatch(signUpRequest(name, email, password));
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
