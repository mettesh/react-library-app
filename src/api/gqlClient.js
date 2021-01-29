import { ApolloClient, InMemoryCache } from '@apollo/client';
// import { useAuth0 } from '@auth0/auth0-react';
// import { createHttpLink } from 'apollo-link-http';
// import { setContext } from 'apollo-link-context';

// const link = createHttpLink({
//   uri: `${process.env.REACT_APP_FAIR_API}/graphql`,
// });

const useApolloClient = () => {
  // const { getAccessTokenSilently } = useAuth0();

  //   const authLink = setContext(async () => {
  //     const token = await getAccessTokenSilently();

  //     return {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     };
  //   });

  return new ApolloClient({
    // link: authLink.concat(link),
    uri: `${process.env.API_URL}/graphql`,
    cache: new InMemoryCache(),
    connectToDevTools: true,
  });
};

export default useApolloClient;
