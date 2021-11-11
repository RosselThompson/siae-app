import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Chip, IconButton } from '@material-ui/core';
import { EditOutlined } from '@material-ui/icons';
import { useLoadScheduleAAC } from 'hooks/useLoadScheduleAAC';
import { Table } from 'components/Table';
import { Loader } from 'components/Loader';

const ApplyAAC = () => {
  const [data, loading, error] = useLoadScheduleAAC();
  const history = useHistory();
  const { t } = useTranslation();

  const columns = [
    {
      title: 'applyAAC.columns.professor',
      field: (e) =>
        `${e?.docenteCurso?.docente?.nombres} ${e?.docenteCurso?.docente?.apellidos}`,
    },
    {
      title: 'applyAAC.columns.course',
      field: 'docenteCurso.curso.codigoCurso',
    },
    {
      title: 'applyAAC.columns.date',
      field: 'fechaAplicacion',
    },
    {
      title: 'applyAAC.columns.startTime',
      field: 'horaInicio',
    },
    {
      title: 'applyAAC.columns.endTime',
      field: 'horaFin',
    },
    {
      title: 'applyAAC.columns.state',
      field: (e) =>
        e.aplicado ? (
          <Chip color="primary" label={t('applyAAC.columns.state.applied')} />
        ) : (
          <Chip color="secondary" label={t('applyAAC.columns.state.pending')} />
        ),
    },
    {
      title: 'applyAAC.columns.action',
      field: (e) =>
        !e.aplicado ? (
          <IconButton
            variant="contained"
            onClick={() => onClickAction(e?.idProgramacion)}
          >
            <EditOutlined />
          </IconButton>
        ) : (
          ''
        ),
    },
  ];

  const onClickAction = (id) => history.push(`/applyaac/${id}`);

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

export default ApplyAAC;
