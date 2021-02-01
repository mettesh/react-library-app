import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

const ScloaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 300px;
`;

const Loading = () => {
  const classes = useStyles();

  return (
    <ScloaderWrapper className={classes.root}>
      <CircularProgress />
    </ScloaderWrapper>
  );
};

export default Loading;
