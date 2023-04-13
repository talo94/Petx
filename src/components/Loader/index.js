import React from 'react';
import ContentLoader from 'react-content-loader';

export const Loader = (props) => (
  <ContentLoader
    speed={2}
    width={400}
    height={160}
    viewBox='0 0 400 160'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
    {...props}
  >
    <circle cx='37' cy='37' r='37' />

  </ContentLoader>
);
