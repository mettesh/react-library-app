import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from '../components/Navigation';

const LandingPage = lazy(() => import('../pages/LandingPage'));
const Books = lazy(() => import('../pages/Books'));
const BookDetail = lazy(() => import('../pages/BookDetail'));
const Profile = lazy(() => import('../pages/Profile'));

const Router = () => {
  return (
    <BrowserRouter>
      <Navigation />

      <Suspense fallback={<></>}>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/books" component={Books} />
          <Route exact path="/books/:bookId" component={BookDetail} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
