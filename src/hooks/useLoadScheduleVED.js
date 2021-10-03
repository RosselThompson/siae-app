import { useEffect, useState } from 'react';
import { ScheduleVED, GeneralSchedule, ProfessorCourse } from 'mock/mockData';

export const useLoadScheduleVED = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setData({
        scheduleData: ScheduleVED,
        generalScheduleData: GeneralSchedule,
        professorCourseData: ProfessorCourse,
      });
      setLoading(false);
    }, 2000);
  }, []);

  return [data, loading, error];
};

export default useLoadScheduleVED;
