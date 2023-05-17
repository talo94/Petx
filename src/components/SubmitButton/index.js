import React from 'react';
import { ButtonLogin } from './styles';

export const SubmitButton = ({ children, disabled, onClick }) => {
  return <ButtonLogin disabled={disabled} onClick={onClick}>{children}</ButtonLogin>;
};
