import { useState } from 'react';
import { useLoadRoles } from 'hooks/useLoadRoles';
import { Table } from 'components/Table';
import { Loader } from 'components/Loader';
import { Toolbar } from 'components/Toolbar';
import RoleForm from './components/RoleForm';
import RoleDelete from './components/RoleDelete';

const columns = [{ title: 'role.columns.role', field: 'nombreRol' }];

const Roles = () => {
  const [data, loading, error] = useLoadRoles();
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
        data={data}
        columns={columns}
        count={0}
        setSelectedRow={setselectedRow}
      />
      <RoleForm
        openForm={openForm}
        handleClose={handleCloseForm}
        isEditing={isEditing}
        selectedRow={selectedRow}
      />
      <RoleDelete
        openForm={openDeleteForm}
        handleClose={handleCloseDeleteForm}
        selectedRow={selectedRow}
      />
    </>
  );
};
export default Roles;
