import { useEffect, useState } from 'react';
import SiaeAPI from 'services/siaeapi';

const useLoadRoles = (index = 0) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    SiaeAPI.get(`/api/modulos?page=${index}`)
      .then(({ data }) => {
        setData(data);
        setLoading(false);
      })
      .catch(({ response }) => {
        setError(response);
      });
  }, []);

  return [data, loading, error];
};

export default useLoadRoles;
