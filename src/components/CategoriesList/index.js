import React from 'react';
import { Category } from '../Category';
import { Item, List } from './styles';
import db from '../../../api/db.json';

export const CategoriesList = () => {
  return (
    <List>
      {db.categories.map((category) => <Item key={category.id}><Category {...category} /></Item>)}
    </List>
  );
};
