import { useState } from 'react';
import { useHistory } from 'react-router';
import { useLoadToolAAC } from 'hooks/useLoadToolAAC';
import { Box } from '@material-ui/core';
import { LoadTool } from 'components/LoadTool';
import { Loader } from 'components/Loader';
import { BackIcon } from 'components/BackIcon';
import { ConfirmDialog } from 'components/ConfirmDialog';

const Tool = () => {
  const [data, loading, error] = useLoadToolAAC();
  const history = useHistory();
  const [isOpenSaveDialog, setisOpenSaveDialog] = useState(false);
  const [isOpenCancelDialog, setisOpenCancelDialog] = useState(false);
  const [isLoadingSave, setisLoadingSave] = useState(false);
  const [isLoadingCancel, setisLoadingCancel] = useState(false);

  const openSaveDialog = () => setisOpenSaveDialog(true);
  const closeSaveDialog = () => setisOpenSaveDialog(false);
  const openCancelDialog = () => setisOpenCancelDialog(true);
  const closeCancelDialog = () => setisOpenCancelDialog(false);

  const redirect = () =>
    setTimeout(() => {
      history.push('/applyAAC');
    }, 2000);

  const submitForm = () => {
    setisLoadingSave(true);
    redirect();
  };

  const cancelForm = () => {
    setisLoadingCancel(true);
    redirect();
  };

  if (loading)
    return (
      <Box paddingX="2rem" paddingTop="3rem">
        <Loader error={error} />
      </Box>
    );

  return (
    <>
      <ConfirmDialog
        isOpenDialog={isOpenSaveDialog}
        handleClose={closeSaveDialog}
        isLoading={isLoadingSave}
        onSubmit={submitForm}
        type="SAVE"
        tool="AAC"
      />
      <ConfirmDialog
        isOpenDialog={isOpenCancelDialog}
        handleClose={closeCancelDialog}
        isLoading={isLoadingCancel}
        onSubmit={cancelForm}
        type="CANCEL"
        tool="AAC"
      />
      <Box margin="0.5rem">
        <BackIcon onClick={openCancelDialog} />
        <Box paddingX="2rem">
          <LoadTool toolData={data} onSubmit={openSaveDialog} type="AAC" />
        </Box>
      </Box>
    </>
  );
};

export default Tool;
