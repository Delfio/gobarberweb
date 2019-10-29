import { takeLatest, call, put ,all } from 'redux-saga/effects';
import api from '~/services/api';

import { toast } from 'react-toastify';

import { updateProfileSucess, updateProfileFailure } from './actions'

export function* updataPorfile({payload}){
  try{

    const {name, email, avatar_id, ...rest} = payload.data;

    const profile = Object.assign(
      { name, email, avatar_id },
      rest.oldPassword ? rest : {}
    );
    const response = yield call(api.put, 'users', profile);

    toast.success('Perfil Atualizado!');

    yield put(updateProfileSucess(response.data));

  }catch(err){
    toast.error('Falha ao atualizar! Verifique seus dados');

    yield put(updateProfileFailure());
  }
}

export default all([
  takeLatest('@user/UPDATA_PROFILE_REQUEST', updataPorfile)
]);
