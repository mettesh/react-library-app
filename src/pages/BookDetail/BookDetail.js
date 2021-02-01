import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
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

  h1 {
    color: ${theme.colors.primary};
  }
`;

const GET_BOOK_BY_ID = gql`
  query bookById($id: Int!) {
    bookById(id: $id) {
      name
      author {
        name
      }
      userRating
      reviews
      price
      year
      genre
    }
  }
`;

const BookDetail = () => {
  const { bookId } = useParams();

  const { loading, error, data } = useQuery(GET_BOOK_BY_ID, {
    variables: { id: parseInt(bookId, 10) },
  });

  if (loading) return <Loading />;
  if (error) return <Error />;

  const {
    name,
    author,
    userRating,
    reviews,
    year,
    genre,
    price,
  } = data.bookById;

  return (
    <ScMain key={data.id}>
      <h1>{name}</h1>
      <p>Forfatter: {author.name}</p>
      <p>Sjanger: {genre}</p>
      <p>Utgitt: {year}</p>
      <p>Antall reviews: {reviews}</p>
      <p>Rating: {userRating}</p>
      <p>Pris: {price}$</p>
    </ScMain>
  );
};

export default BookDetail;
