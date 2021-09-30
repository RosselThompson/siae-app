import { useState } from 'react';
import { useLoadScheduleAAC } from 'hooks/useLoadScheduleAAC';
import { Table } from 'components/Table';
import { Toolbar } from 'components/Toolbar';
import { Loader } from 'components/Loader';
import ScheduleAACForm from './components/ScheduleAACForm';
import ScheduleAACDelete from './components/ScheduleAACDelete';

const columns = [
  {
    title: 'scheduleAAC.columns.faculty',
    field: 'planificacionGeneral.sedeFacultad.nombre',
  },
  {
    title: 'scheduleAAC.columns.semester',
    field: 'planificacionGeneral.semestre',
  },
  { title: 'scheduleAAC.columns.year', field: 'planificacionGeneral.anio' },
  {
    title: 'scheduleAAC.columns.professor',
    field: (e) =>
      `${e?.docenteCurso?.docente?.nombres} ${e?.docenteCurso?.docente?.apellidos}`,
  },
  {
    title: 'scheduleAAC.columns.date',
    field: 'fechaAplicacion',
  },
  {
    title: 'scheduleAAC.columns.startTime',
    field: 'horaInicio',
  },
  {
    title: 'scheduleAAC.columns.endTime',
    field: 'horaFin',
  },
];

const ScheduleAAC = () => {
  const [data, loading, error] = useLoadScheduleAAC();
  const [openForm, setopenForm] = useState(false);
  const [openDeleteForm, setopenDeleteForm] = useState(false);
  const [selectedRow, setselectedRow] = useState(null);
  const [isEditing, setisEditing] = useState(false);

  const handleOpenForm = () => setopenForm(true);
  const handleCloseForm = () => setopenForm(false);
  const handleOpenDeleteForm = () => setopenDeleteForm(true);
  const handleCloseDeleteForm = () => setopenDeleteForm(false);

  const handleAddButton = () => {
    handleOpenForm();
    setisEditing(false);
  };
  const handleEditButton = () => {
    handleOpenForm();
    setisEditing(true);
  };
  if (loading) return <Loader error={error} />;
  return (
    <>
      <Toolbar
        onClickAdd={handleAddButton}
        onClickEdit={handleEditButton}
        onClickDelete={handleOpenDeleteForm}
        isSelected={!!selectedRow}
      />
      <Table
        data={data?.scheduleData}
        columns={columns}
        count={0}
        setSelectedRow={setselectedRow}
      />
      <ScheduleAACForm
        openForm={openForm}
        handleClose={handleCloseForm}
        isEditing={isEditing}
        selectedRow={selectedRow}
        generalScheduleData={data?.generalScheduleData}
        professorCourseData={data?.professorCourseData}
        professorData={data?.professorData}
      />
      <ScheduleAACDelete
        openForm={openDeleteForm}
        handleClose={handleCloseDeleteForm}
        selectedRow={selectedRow}
      />
    </>
  );
};

export default ScheduleAAC;
