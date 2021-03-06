import { useEffect } from 'react';
import { Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

import { ToastContainer } from 'react-toastify';

import Container from './components/Container';
import AppBar from './components/AppBar';

import HomeView from './views/HomeView';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';
import ContactsView from './views/ContactsView';

import { authOperations } from './redux/auth';
import authSelectors from './redux/auth/auth-selectors';

// const HomeView = lazy(() =>
//   import('./views/HomeView' /* webpackChunkName: "home-view" */),
// );

// const RegisterView = lazy(() =>
//   import('./views/RegisterView' /* webpackChunkName: "register-view" */),
// );
// const LoginView = lazy(() =>
//   import('./views/LoginView' /* webpackChunkName: "login-view" */),
// );
// const ContactsView = lazy(() =>
//   import('./views/ContactsView' /* webpackChunkName: "contacts-view" */),
// );

// const NotFoundView = lazy(() =>
//   import('./views/NotFoundView' /* webpackChunkName: "not-found-view" */),
// );

function App() {
  const isFetchingCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrentUser,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <Container>
        <AppBar />

        <Switch>
          <PublicRoute path="/" exact>
            <HomeView />
          </PublicRoute>

          <PublicRoute path="/register" restricted redirectTo="/contacts">
            <RegisterView />
          </PublicRoute>

          <PublicRoute path="/login" restricted redirectTo="/contacts">
            <LoginView />
          </PublicRoute>

          <PrivateRoute path="/contacts" redirectTo="/login">
            <ContactsView />
          </PrivateRoute>
        </Switch>

        <ToastContainer autoClose={3000} position="top-center" />
      </Container>
    )
  );
}

export default App;
