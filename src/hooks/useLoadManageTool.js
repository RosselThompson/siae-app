import { useEffect, useState } from 'react';
import { AAC, VED, AVD, Aspects } from 'mock/mockData';

// USE SIAE PATH INSTEAD MOCK DATA
const paths = {
  ['/aac']: AAC,
  ['/ved']: VED,
  ['/avd']: AVD,
};

export const useLoadManageTool = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error] = useState(null);
  const toolData = paths[window.location.pathname];

  useEffect(() => {
    setTimeout(() => {
      setData({ toolData, aspects: Aspects });
      setLoading(false);
    }, 2000);
  }, []);

  return [data, loading, error];
};

export default useLoadManageTool;
