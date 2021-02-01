import React from 'react';
import styled from 'styled-components';

const ScErrorWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 300px;
`;

const Error = () => {
  return (
    <ScErrorWrapper>
      <h2>Oh no :(</h2>
    </ScErrorWrapper>
  );
};

export default Error;
