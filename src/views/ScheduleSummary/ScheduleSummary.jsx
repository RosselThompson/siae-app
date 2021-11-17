import { useTranslation } from 'react-i18next';
import { Chip } from '@material-ui/core';
import { useLoadScheduleAAC } from 'hooks/useLoadScheduleAAC';
import { Table } from 'components/Table';
import { Loader } from 'components/Loader';

const ScheduleSummary = () => {
  const [data, loading, error] = useLoadScheduleAAC();
  const { t } = useTranslation();

  const columns = [
    {
      title: 'scheduleSummary.columns.professor',
      field: (e) =>
        `${e?.docenteCurso?.docente?.nombres} ${e?.docenteCurso?.docente?.apellidos}`,
    },
    {
      title: 'scheduleSummary.columns.stateAAC',
      field: (e) =>
        e.aplicado ? (
          <Chip color="primary" label={t('applyAAC.columns.state.applied')} />
        ) : (
          <Chip color="secondary" label={t('applyAAC.columns.state.pending')} />
        ),
    },
    {
      title: 'scheduleSummary.columns.stateVED',
      field: (e) =>
        e.aplicado ? (
          <Chip color="primary" label={t('applyAAC.columns.state.applied')} />
        ) : (
          <Chip color="secondary" label={t('applyAAC.columns.state.pending')} />
        ),
    },
    {
      title: 'scheduleSummary.columns.stateAVD',
      field: (e) =>
        e.aplicado ? (
          <Chip color="primary" label={t('applyAAC.columns.state.applied')} />
        ) : (
          <Chip color="secondary" label={t('applyAAC.columns.state.pending')} />
        ),
    },
  ];

  if (loading) return <Loader error={error} />;
  return (
    <>
      <Table
        data={data?.scheduleData}
        columns={columns}
        count={0}
        setSelectedRow={() => {}}
        isSelectAllowed={false}
      />
    </>
  );
};

export default ScheduleSummary;
