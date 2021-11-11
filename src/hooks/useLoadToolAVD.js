import { useEffect, useState } from 'react';
import { AVD } from 'mock/mockData';

export const useLoadToolAVD = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setData(AVD);
      setLoading(false);
    }, 2000);
  }, []);

  return [data, loading, error];
};

export default useLoadToolAVD;
