import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const LandingPage = lazy(() => import('../pages/LandingPage'));
const Books = lazy(() => import('../pages/Books'));
const BookDetail = lazy(() => import('../pages/BookDetail'));

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<></>}>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/books" component={Books} />
          <Route exact path="/books/:bookId" component={BookDetail} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
