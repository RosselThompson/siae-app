import { useEffect, useState } from 'react';
import { AAC } from 'mock/mockData';

export const useLoadApplyAAC = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setData(AAC);
      setLoading(false);
    }, 2000);
  }, []);

  return [data, loading, error];
};

export default useLoadApplyAAC;
