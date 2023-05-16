import React from 'react';
import { useInputValue } from '../../hooks/useInputValue';
import { ButtonLogin, Error, Form, Input, LinkContainer, LinkLogin, LinkText, LoginContainer, Title } from './styles';
import { LoaderContainer } from '../Register/styles';
import { PawLoader } from '../Loader';

export const Login = ({ onSubmit, title, error, loading }) => {
  const email = useInputValue('');
  const password = useInputValue('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ email: email.value, password: password.value });
  };

  console.log('error', error);
  return (
    <LoginContainer>
      {loading && <LoaderContainer><PawLoader /></LoaderContainer>}

      <Title>{title}</Title>
      <Form onSubmit={handleSubmit}>
        <Input type='text' placeholder='Email' {...email} />
        <Input type='password' placeholder='Password' {...password} />
        <ButtonLogin>Iniciar sesión</ButtonLogin>
        {error && <Error>{error}</Error>}
      </Form>
      <LinkContainer>
        <LinkText>No tenés cuenta aún?</LinkText>
        <LinkLogin to='/sign-up'>Registrate aquí</LinkLogin>
      </LinkContainer>
    </LoginContainer>
  );
};
