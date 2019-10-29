import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { updateProfileRequest } from '~/store/modules/user/actions';
import { signOut } from '~/store/modules/auth/actions';

import AvatarInput from './AvatarInput';

import { Container } from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data){
    dispatch(updateProfileRequest(data));
  }

  function handleSignOut(){
    dispatch(signOut());
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <AvatarInput name="avatar_id">

        </AvatarInput>

        <Input name ="name" placeholder ="Nome completo" />
        <Input name ="email" type="email" placeholder ="Seu Email" />

        <hr/>

        <Input name ="oldpassword" type="password" placeholder="Sua Senha atual" />
        <Input name ="password" type="password" placeholder="Nova Senha" />
        <Input name ="confirmPassword" type="password" placeholder="Confirmação de senha" />

        <button type="submit"> Atualizar Perfil </button>

      </Form>

      <button onClick={handleSignOut} type="button">Sair do GoBarber</button>
    </Container>
  );
}
