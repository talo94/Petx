import React from 'react';
import OverviewContext from '../contexts/OverviewContext';
import { LoginMutation } from '../container/LoginMutation';
import { Login } from '../components/Login';

export const SignIn = () => (
  <OverviewContext.Consumer>
    {
      ({ activateAuth }) => {
        return (
          <LoginMutation>
            {
              (register, { data, loading, error }) => {
                const onSubmit = ({ email, password }) => {
                  register({ variables: { input: { email, password } } })
                    .then(({ data }) => {
                      const { login } = data;
                      activateAuth(login);
                    });
                };
                const errorMessage = error && 'El usuario o la contraseña no es correcta';

                return <Login onSubmit={onSubmit} title='Inicio de sesión' error={errorMessage} loading={loading} />;
              }
            }
          </LoginMutation>
        );
      }
    }
  </OverviewContext.Consumer>
);
