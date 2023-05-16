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
export const PawLoader = (props) => (
  <ContentLoader
    speed={2}
    width='95%'
    height={60}
    viewBox='0 0 400 160'
    backgroundColor='#00d8ff'
    foregroundColor='#d1f7ff'
    {...props}
  >
    <circle cx='210' cy='48' r='17' />
    <circle cx='183' cy='73' r='14' />
    <circle cx='224' cy='95' r='28' />
    <circle cx='246' cy='50' r='17' />
    <circle cx='268' cy='78' r='13' />
  </ContentLoader>
);
