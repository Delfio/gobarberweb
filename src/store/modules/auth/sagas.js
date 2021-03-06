import {  takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import { signInSucess, signFailure } from './actions'

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password
    });

    const { token, user } = response.data;

    if(!user.provider){
      toast.error('Esta conta não é prestador de serviços');
      return;
    }

    //api.defaults.headers.Authorization = `Bearer ${token}`; mesma coisa
    api.defaults.headers['Authorization'] = `Bearer ${token}`;

    yield put(signInSucess(token, user));

    history.push('/dashboard');
  } catch(err){
    toast.error('Falha na autenticação!');
    yield put(signFailure());
  }
};

export function* signUp ({ payload }) {
  try{
    const { name, email, password } = payload;

    yield call(api.post, 'users', {
      name,
      email,
      password,
      provider: true,
    });
    history.push('/')

  }catch(err){
    toast.error("Falha ao registrar usuário!");

    yield put(signFailure());
  }
}
export function setToken ({ payload }) {
  const { token } = payload.auth;

  if(!payload) {
    console.log("asdfasdf")
    return
  }

  if(token) {
    api.defaults.headers['Authorization'] = `Bearer ${token}`;
  }

}

export function signOut(){
  history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
