import { Outlet } from 'react-router-dom';
import Auth from '../pages/Auth';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useMemo } from 'react';

const ProtectedRouter = () => {
  const { user } = useTypedSelector((state) => state.auth);
  const auth = useMemo(() => localStorage.getItem('user') !== null, [user]);

  return auth ? <Outlet /> : <Auth />;
};

export default ProtectedRouter;
