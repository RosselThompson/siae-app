import { useEffect, useState } from 'react';
import { Aspects } from 'mock/mockData';

export const useLoadAspects = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setData(Aspects);
      setLoading(false);
    }, 2000);
  }, []);

  return [data, loading, error];
};

export default useLoadAspects;
