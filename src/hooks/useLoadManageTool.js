import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
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
  const { pathname } = useLocation();
  const toolData = paths[pathname];

  useEffect(() => {
    setTimeout(() => {
      setData({ toolData, aspectsData: Aspects });
      setLoading(false);
    }, 2000);
  }, []);

  return [data, loading, error];
};

export default useLoadManageTool;
