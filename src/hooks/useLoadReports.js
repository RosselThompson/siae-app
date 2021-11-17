import { useEffect, useState } from 'react';
import { Faculties, Departments } from 'mock/mockData';

export const useLoadReports = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setData({ faculties: Faculties, departments: Departments });
      setLoading(false);
    }, 2000);
  }, []);

  return [data, loading, error];
};

export default useLoadReports;
