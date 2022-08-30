import { Outlet } from 'react-router-dom';
import Auth from '../pages/Auth';
import useTypedSelector from '../hooks/useTypedSelector';
import { useMemo } from 'react';
import { KEY_USER } from '../config/constants';

const ProtectedRouter = () => {
  const { user } = useTypedSelector((state) => state.auth);
  const auth = useMemo(() => localStorage.getItem(KEY_USER) !== null, [user]);

  return auth ? <Outlet /> : <Auth />;
};

export default ProtectedRouter;
