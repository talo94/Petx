import React from 'react';
import { CategoriesList } from '../components/CategoriesList';
import { PhotoCardList } from '../container/PhotoCardList';

export const Home = ({ categoryId }) => {
  return (
    <>
      <CategoriesList />
      <PhotoCardList categoryId={categoryId} />
    </>
  );
};
