import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import OverviewContext from './contexts/OverviewContext';

const container = document.getElementById('app');
const root = createRoot(container);

const client = new ApolloClient({
  uri: 'https://petx-server-talo-talo94.vercel.app/graphql'
});

root.render(
  <OverviewContext.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </OverviewContext.Provider>
);
