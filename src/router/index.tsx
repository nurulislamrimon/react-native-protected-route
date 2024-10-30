import React from 'react';
import ProtectedRoutes from './ProtectedRoutes';
import Auth from './Auth';
import {useAuth} from '../providers/AuthProvider';

export default function Router() {
  const {isAuthorized} = useAuth();
  return isAuthorized ? <ProtectedRoutes /> : <Auth />;
}
