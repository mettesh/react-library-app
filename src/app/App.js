import React from 'react';
import { ApolloProvider } from '@apollo/client';
import Router from '../router/index';
import useApolloClient from '../api/gqlClient';

function App() {
  const apolloClient = useApolloClient();

  return (
    <ApolloProvider client={apolloClient}>
      <Router />
    </ApolloProvider>
  );
}

export default App;
