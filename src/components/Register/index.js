import React from 'react';
import { useInputValue } from '../../hooks/useInputValue';
import { Error, Form, Input, LinkContainer, LinkRegister, LinkText, LoaderContainer, RegisterContainer, Title } from './styles';
import { PawLoader } from '../Loader';
import { SubmitButton } from '../SubmitButton';

export const Register = ({ onSubmit, title, error, loading }) => {
  const email = useInputValue('');
  const password = useInputValue('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ email: email.value, password: password.value });
  };

  return (
    <RegisterContainer>
      {loading && <LoaderContainer><PawLoader /></LoaderContainer>}
      <Title>{title}</Title>
      <Form onSubmit={handleSubmit} disabled={loading}>
        <Input disabled={loading} type='text' placeholder='Email' {...email} />
        <Input disabled={loading} type='password' placeholder='Password' {...password} />
        {error && <Error>{error}</Error>}
        <SubmitButton disabled={loading}>Crear cuenta</SubmitButton>
      </Form>
      <LinkContainer>
        <LinkText>Ya tenés cuenta?</LinkText>
        <LinkRegister to='/login'>Inicia sesión aquí</LinkRegister>
      </LinkContainer>
    </RegisterContainer>
  );
};
