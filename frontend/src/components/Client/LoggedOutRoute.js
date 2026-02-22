import React from 'react';
import { Navigate } from 'react-router-dom';

const LoggedOutRoute = ({ children }) => {
  // Replace this with your logic to check if the user is logged in
  const isLoggedIn = sessionStorage.getItem('clt_auth');

  if (!isLoggedIn) {
    // Redirect them to the /login page, but don't create another entry in the history stack
    return <Navigate to="/client-login" replace />;
  }

  return children;
};

export default LoggedOutRoute;
