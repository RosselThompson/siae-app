import { useState } from 'react';
import { useLoadManageTool } from 'hooks/useLoadManageTool';
import { CollapsibleTable } from 'components/CollapsibleTable';
import { Toolbar } from 'components/Toolbar';
import { Loader } from 'components/Loader';
import ManageToolForm from './components/ManageToolForm';
import ManageToolDelete from './components/ManageToolDelete';
import PropTypes from 'prop-types';

const columns = [{ title: 'manageTools.columns.aspect', field: 'nombre' }];

const ManageTools = () => {
  const [data, loading, error] = useLoadManageTool();
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

      <CollapsibleTable
        data={data}
        fieldChild="criterios"
        textChild="nombre"
        columns={columns}
        setSelectedRow={setselectedRow}
      />
      <ManageToolForm
        openForm={openForm}
        handleClose={handleCloseForm}
        isEditing={isEditing}
        selectedRow={selectedRow}
      />
      <ManageToolDelete
        openForm={openDeleteForm}
        handleClose={handleCloseDeleteForm}
        selectedRow={selectedRow}
      />
    </>
  );
};

ManageTools.propTypes = {
  type: PropTypes.string, // COULD BE AAC, AVD, VED
};

export default ManageTools;
