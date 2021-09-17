import { useEffect, useState } from 'react';
import { Users, Roles } from 'mock/mockData';

export const useLoadUser = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setData({ users: Users, roles: Roles });
      setLoading(false);
    }, 2000);
  }, []);

  return [data, loading, error];
};

export default useLoadUser;
