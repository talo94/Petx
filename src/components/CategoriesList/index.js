import React, { useEffect, useState } from 'react';
import { Category } from '../Category';
import { Item, List } from './styles';
import { useCategoriesData } from '../../hooks/useCategoriesData';

export const CategoriesList = () => {
  const [showFixed, showSetFixed] = useState(false);
  const [categories, loading] = useCategoriesData();

  useEffect(() => {
    const onScroll = (e) => {
      const newShowFixed = window.scrollY > 200;
      showFixed !== newShowFixed && showSetFixed(newShowFixed);
    };
    document.addEventListener('scroll', onScroll);

    return () => document.removeEventListener('scroll', onScroll);
  }, [showFixed]);

  const renderList = (fixed) => {
    if (loading) {
      return (
        <List fixed={fixed}>
          {[1, 2, 3, 4, 5, 6].map((category) => <Item key={`loader-${category}`}><Category loading /></Item>)}
        </List>
      );
    }
    return (
      <List fixed={fixed}>
        {categories.map((category) => <Item key={category.id}><Category {...category} path={`/pet/${category.id}`} /></Item>)}
      </List>
    );
  };

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  );
};
