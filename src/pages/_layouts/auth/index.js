import React from 'react';
import PropyTypes from 'prop-types';

import { Wrapper } from './styles';

//Todo componente inserido dentro do <AuthLayout> vem como propriedade no "children"
export default function AuthLayout({ children }) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
}

AuthLayout.prototype = {
  children: PropyTypes.element.isRequired,
}
