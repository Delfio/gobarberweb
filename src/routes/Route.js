import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import AuthLayout from '../pages/_layouts/auth';
import DefaultLayout from '../pages/_layouts/default';

//Criando logica de rota privada
export default function RouteWrapper({
  component: Component,
  isPrivate = false,
  ...rest
}) {
  //Informação para saber se o usuario está logado
  const signed = false;

  //Não está logado e a rota é privada - redirecionar para home
  if(!signed && isPrivate){
    return <Redirect to ="/" />;
  }

  //Esta logado e a rota é privada - redireciona para dashboard
  // Não faz sentido ele fazer login novamente por isso o "não privado"
  if(signed && !isPrivate){
    return <Redirect to ="Dashboard" />
  }

  const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    <Route
      { ...rest }
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
      />
  )
}

//Validações de proptypes
RouteWrapper.prototype = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps={
  isPrivate: false,
}
