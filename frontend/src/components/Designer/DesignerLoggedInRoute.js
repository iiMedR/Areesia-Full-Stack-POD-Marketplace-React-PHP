import React from 'react';
import { Navigate } from 'react-router-dom';

const LoggedInRoute = ({ children }) => {
  // Replace this with your logic to check if the user is logged in
  const isLoggedIn = sessionStorage.getItem('des_auth');

  if (isLoggedIn) {
    // Redirect them to the /login page, but don't create another entry in the history stack
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default LoggedInRoute;
