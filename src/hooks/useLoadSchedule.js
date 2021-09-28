import { useEffect, useState } from 'react';
import { GeneralSchedule, Faculties } from 'mock/mockData';

export const useLoadSchedule = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setData({ scheduleData: GeneralSchedule, facultiesData: Faculties });
      setLoading(false);
    }, 2000);
  }, []);

  return [data, loading, error];
};

export default useLoadSchedule;
