import React from 'react';
import PropyTypes from 'prop-types';

import Header from '~/components/Header';

import { Wrapper } from './styles';

//Todo componente inserido dentro do <AuthLayout> vem como propriedade no "children"
export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
}

DefaultLayout.prototype = {
  children: PropyTypes.element.isRequired,
}
