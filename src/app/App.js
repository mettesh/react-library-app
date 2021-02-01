import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { withAuthenticationRequired } from '@auth0/auth0-react';
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

export default withAuthenticationRequired(App, {
  onRedirecting: () => <div>Redirect to auth...</div>,
});
