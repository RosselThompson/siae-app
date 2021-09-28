import { useState } from 'react';
import { useLoadSchedule } from 'hooks/useLoadSchedule';
import { Table } from 'components/Table';
import { Toolbar } from 'components/Toolbar';
import { Loader } from 'components/Loader';
import ScheduleForm from './components/ScheduleForm';
import ScheduleDelete from './components/ScheduleDelete';

const columns = [
  { title: 'schedule.columns.faculty', field: 'sedeFacultad.nombre' },
  { title: 'schedule.columns.year', field: 'anio' },
  { title: 'schedule.columns.semester', field: 'semestre' },
  { title: 'schedule.columns.startDate', field: 'fechaInicio' },
  { title: 'schedule.columns.endDate', field: 'fechaFin' },
];

const Schedule = () => {
  const [data, loading, error] = useLoadSchedule();
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
      <ScheduleForm
        openForm={openForm}
        handleClose={handleCloseForm}
        isEditing={isEditing}
        selectedRow={selectedRow}
        faculties={data?.facultiesData}
      />
      <ScheduleDelete
        openForm={openDeleteForm}
        handleClose={handleCloseDeleteForm}
        selectedRow={selectedRow}
      />
    </>
  );
};

export default Schedule;
