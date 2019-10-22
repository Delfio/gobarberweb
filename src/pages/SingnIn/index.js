import React from 'react';
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import * as Yup from 'yup';

import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.svg'

const schema = Yup.object().shape({
  email: Yup.string().email('Insira um email Válido!').required('Email Obrigatório'),
  password: Yup.string().required("Favor insira sua senha")
});

export default function SingnIn() {

  const dispatch = useDispatch();

  function handleSubmit({email, password}){
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="go-barber"/>

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input type="email" name="email" placeholder="seu email" id=""/>
        <Input type="password" placeholder="sua senha" name="password" id=""/>

        <button type="submit"> Acessar </button>
        <Link to="/register"> Criar uma conta Grátis</Link>
      </Form>
    </>
  );
}
