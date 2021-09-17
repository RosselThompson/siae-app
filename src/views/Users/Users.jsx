import { useState } from 'react';
import { useLoadUser } from 'hooks/useLoadUser';
import { Table } from 'components/Table';
import { Toolbar } from 'components/Toolbar';
import { Loader } from 'components/Loader';
import { getRoleByString } from 'helpers/getRoleByString';
import UserForm from './components/UserForm';
import UserDelete from './components/UserDelete';

const columns = [
  { title: 'user.columns.email', field: 'email' },
  { title: 'user.columns.firstName', field: 'firstName' },
  { title: 'user.columns.lastName', field: 'lastName' },
  { title: 'user.columns.role', field: 'role' },
];

const Users = () => {
  const [data, loading, error] = useLoadUser();
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
        data={getRoleByString(data.users, data.roles)}
        columns={columns}
        count={0}
        setSelectedRow={setselectedRow}
      />
      <UserForm
        openForm={openForm}
        handleClose={handleCloseForm}
        isEditing={isEditing}
        selectedRow={selectedRow}
      />
      <UserDelete
        openForm={openDeleteForm}
        handleClose={handleCloseDeleteForm}
        selectedRow={selectedRow}
      />
    </>
  );
};

export default Users;
