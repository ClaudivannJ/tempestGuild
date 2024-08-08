import React from 'react';
import { Navigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to="/login" />;
  }

  try {
    const decodedToken = jwtDecode(token);
    const isTokenExpired = decodedToken.exp * 1000 < Date.now();

    if (isTokenExpired) {
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      return <Navigate to="/login" />;
    }

    return <Component {...rest} />;
  } catch (error) {
    console.error('Error decoding token:', error);
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;
