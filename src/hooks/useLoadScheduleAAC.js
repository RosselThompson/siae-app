import { useEffect, useState } from 'react';
import {
  ScheduleAAC,
  GeneralSchedule,
  ProfessorCourse,
  Professors,
} from 'mock/mockData';

export const useLoadScheduleAAC = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setData({
        scheduleData: ScheduleAAC,
        generalScheduleData: GeneralSchedule,
        professorCourseData: ProfessorCourse,
        professorData: Professors,
      });
      setLoading(false);
    }, 2000);
  }, []);

  return [data, loading, error];
};

export default useLoadScheduleAAC;
