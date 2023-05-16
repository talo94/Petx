import React from 'react';
import { PhotoCard } from '../PhotoCard';

export const PhotoCardListComponent = ({ data: { photos = [] } } = {}) => {
  return (
    <ul>
      {photos.map((photoCard) => (
        <PhotoCard key={photoCard.id} {...photoCard} />
      ))}
    </ul>
  );
};
