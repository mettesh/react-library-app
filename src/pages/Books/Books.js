import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import theme from '../../theme';

const ScMain = styled.main`
  background-color: white;
  margin: 20px auto;
  max-width: 1400px;
  padding: 1em;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  text-align: center;

  div {
    padding: 1em;
    border-bottom: 1px solid ${theme.colors.primary};

    a:link,
    a:active,
    a:visited {
      text-decoration: none;
      color: black;
    }
  }

  div:hover {
    background-color: ${theme.colors.primary};
    opacity: 0.6;
  }
`;

const GET_ALL_BOOKS = gql`
  query allBooks {
    allBooks {
      id
      name
      author {
        name
      }
    }
  }
`;

const Books = () => {
  const { loading, error, data } = useQuery(GET_ALL_BOOKS);
  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <ScMain>
      <h1>Library</h1>

      {data &&
        data.allBooks.map((book) => (
          <div key={book.id}>
            <Link to={`/books/${book.id}`}>
              <h2 key={book.name}>{book.name}</h2>
              <p key={book.author.name}>{book.author.name}</p>
            </Link>
          </div>
        ))}
    </ScMain>
  );
};

export default Books;
