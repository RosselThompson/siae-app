import { useState } from 'react';
import { useLoadAspects } from 'hooks/useLoadAspects';
import { CollapsibleTable } from 'components/CollapsibleTable';
import { Toolbar } from 'components/Toolbar';
import { Loader } from 'components/Loader';
import AspectForm from './components/AspectForm';
import AspectDelete from './components/AspectDelete';

const columns = [{ title: 'aspects.columns.aspect', field: 'name' }];

const Aspect = () => {
  const [data, loading, error] = useLoadAspects();
  const [selectedRow, setselectedRow] = useState(null);
  const [openForm, setopenForm] = useState(false);
  const [openDeleteForm, setopenDeleteForm] = useState(false);
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
        fieldChild="variables"
        textChild="name"
        columns={columns}
        setSelectedRow={setselectedRow}
      />
      <AspectForm
        openForm={openForm}
        handleClose={handleCloseForm}
        isEditing={isEditing}
        selectedRow={selectedRow}
        aspectData={data?.aspects}
      />
      <AspectDelete
        openForm={openDeleteForm}
        handleClose={handleCloseDeleteForm}
        selectedRow={selectedRow}
      />
    </>
  );
};

export default Aspect;
