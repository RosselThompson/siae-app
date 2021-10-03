import { useState } from 'react';
import { useLoadScheduleVED } from 'hooks/useLoadScheduleVED';
import { Table } from 'components/Table';
import { Toolbar } from 'components/Toolbar';
import { Loader } from 'components/Loader';
import ScheduleVEDForm from './components/ScheduleVEDForm';
import ScheduleVEDDelete from './components/ScheduleVEDDelete';

const columns = [
  {
    title: 'scheduleVED.columns.faculty',
    field: 'planificacionGeneral.sedeFacultad.nombre',
  },
  {
    title: 'scheduleVED.columns.semester',
    field: 'planificacionGeneral.semestre',
  },
  { title: 'scheduleVED.columns.year', field: 'planificacionGeneral.anio' },
  {
    title: 'scheduleVED.columns.professor',
    field: (e) =>
      `${e?.docenteCurso?.docente?.nombres} ${e?.docenteCurso?.docente?.apellidos}`,
  },
  {
    title: 'scheduleVED.columns.course',
    field: 'docenteCurso.curso.codigoCurso',
  },
  {
    title: 'scheduleVED.columns.date',
    field: 'fechaAplicacion',
  },
  {
    title: 'scheduleVED.columns.startTime',
    field: 'horaInicio',
  },
  {
    title: 'scheduleVED.columns.endTime',
    field: 'horaFin',
  },
];

const ScheduleVED = () => {
  const [data, loading, error] = useLoadScheduleVED();
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
      <ScheduleVEDForm
        openForm={openForm}
        handleClose={handleCloseForm}
        isEditing={isEditing}
        selectedRow={selectedRow}
        generalScheduleData={data?.generalScheduleData}
        professorCourseData={data?.professorCourseData}
      />
      <ScheduleVEDDelete
        openForm={openDeleteForm}
        handleClose={handleCloseDeleteForm}
        selectedRow={selectedRow}
      />
    </>
  );
};

export default ScheduleVED;
