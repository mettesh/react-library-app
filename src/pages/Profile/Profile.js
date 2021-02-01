import React from 'react';
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';
import theme from '../../theme';
import Loading from '../../components/Loading';

const ScMain = styled.main`
  background-color: white;
  margin: 20px auto;
  max-width: 1400px;
  padding: 1em;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  text-align: center;

  h1 {
    color: ${theme.colors.primary};
  }
`;

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <Loading />;

  return (
    isAuthenticated && (
      <ScMain>
        <h1>Profil</h1>
        <img src={user.picture} alt="User" />
        <p>{user.nickname}</p>
        <p>{user.email}</p>
      </ScMain>
    )
  );
};

export default Profile;
