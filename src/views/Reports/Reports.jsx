import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Grid } from '@material-ui/core';
import useLoadReports from 'hooks/useLoadReports';
import { ReportCard } from 'components/ReportCard';
import { Loader } from 'components/Loader';
import SearchFaculty from './components/SearchFaculty';
import SearchDep from './components/SearchDep';

const Reports = () => {
  const { t } = useTranslation();
  const [data, loading, error] = useLoadReports();
  const [isOpenSearchFaculty, setisOpenSearchFaculty] = useState(false);
  const [isOpenSearchDep, setisOpenSearchDep] = useState(false);

  const closeSearchFaculty = () => setisOpenSearchFaculty(false);
  const closeSearchDep = () => setisOpenSearchDep(false);

  if (loading) return <Loader error={error} />;

  return (
    <>
      <SearchFaculty
        opened={isOpenSearchFaculty}
        onClose={closeSearchFaculty}
        title={t('reports.searchFaculty.title')}
        onSubmit={() => {}}
        facultiesData={data.faculties}
      />
      <SearchDep
        opened={isOpenSearchDep}
        onClose={closeSearchDep}
        title={t('reports.searchDep.title')}
        onSubmit={() => {}}
        departmentsData={data.departments}
      />
      <Grid container>
        <Grid item md={4} sm={12} xs={12}>
          <ReportCard
            image="static/icons/report-faculties.svg"
            title={t('reports.dep.title')}
            body={t('reports.dep.body')}
            onClick={() => setisOpenSearchDep(true)}
          />
        </Grid>
        <Grid item md={4} sm={12} xs={12}>
          <ReportCard
            image="static/icons/report-dep.svg"
            title={t('reports.faculty.title')}
            body={t('reports.faculty.body')}
            onClick={() => setisOpenSearchFaculty(true)}
          />
        </Grid>
        <Grid item md={4} sm={12} xs={12}>
          <ReportCard
            image="static/icons/report-calendar.svg"
            title={t('reports.schedule.title')}
            body={t('reports.schedule.body')}
            onClick={() => setisOpenSearchDep(true)}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Reports;
