import React, { useContext } from 'react';
import { OverviewContext } from '../contexts/OverviewContext';
import { SubmitButton } from '../components/SubmitButton';
export const Users = () => {
  const { removeAuth } = useContext(OverviewContext);

  return (
    <>
      <h1> Users </h1>
      <SubmitButton onClick={removeAuth}>Cerrar sesión</SubmitButton>
    </>
  );
};
