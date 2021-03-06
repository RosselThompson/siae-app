import { useEffect, useState } from 'react';
import { Roles } from 'mock/mockData';

export const useLoadRoles = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setData(Roles);
      setLoading(false);
    }, 2000);
  }, []);

  return [data, loading, error];
};

export default useLoadRoles;
