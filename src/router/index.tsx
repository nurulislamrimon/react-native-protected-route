import React from 'react';
import ProtectedRoutes from './ProtectedRoutes';
import Auth from './Auth';

export default function Router() {
  const isAuthorized = false;
  return isAuthorized ? <ProtectedRoutes /> : <Auth />;
}
