import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { useAuth0 } from '@auth0/auth0-react';
import books from '../../assets/books.jpg';

const ScMain = styled.main`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px auto;
  max-width: 1400px;
  padding: 1em;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  text-align: center;

  button {
    width: 10%;
  }

  img {
    margin-top: 1em;
    width: 80%;
  }
`;

const LandingPage = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <ScMain>
      <h1>Velkommen til Bøker!</h1>
      {!isAuthenticated && (
        <Button
          variant="contained"
          color="primary"
          onClick={() => loginWithRedirect()}
        >
          Logg inn
        </Button>
      )}
      <Link to="/books">
        <img src={books} alt="Books" />
      </Link>
    </ScMain>
  );
};

export default LandingPage;
