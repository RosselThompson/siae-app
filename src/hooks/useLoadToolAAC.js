import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { AAC } from 'mock/mockData';

export const useLoadToolAAC = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error] = useState(null);

  // SEND ID TO API REQUEST
  console.log(id);

  useEffect(() => {
    setTimeout(() => {
      setData(AAC);
      setLoading(false);
    }, 2000);
  }, []);

  return [data, loading, error];
};

export default useLoadToolAAC;
