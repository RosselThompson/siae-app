import { useEffect, useState } from 'react';
import { VED } from 'mock/mockData';

export const useLoadToolVED = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setData(VED);
      setLoading(false);
    }, 2000);
  }, []);

  return [data, loading, error];
};

export default useLoadToolVED;
