import React, { useContext } from 'react';
import { OverviewContext } from '../contexts/OverviewContext';
import { Register } from '../components/Register';
import { RegisterMutation } from '../container/RegisterMutation';

export const NotRegisterUser = () => {
  const { activateAuth } = useContext(OverviewContext);

  return (
    <RegisterMutation>
      {
              (register, { data, loading, error }) => {
                const onSubmit = ({ email, password }) => {
                  register({ variables: { input: { email, password } } }).then(({ data }) => {
                    const { signup } = data;
                    activateAuth(signup);
                  });
                };
                const errorMessage = error && 'El usuario ya existe o hay algún problema';

                return <Register onSubmit={onSubmit} title='Crear cuenta' error={errorMessage} loading={loading} />;
              }
            }
    </RegisterMutation>
  );
};
