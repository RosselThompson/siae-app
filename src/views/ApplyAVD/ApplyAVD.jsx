import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useLoadToolAVD } from 'hooks/useLoadToolAVD';
import { LoadTool } from 'components/LoadTool';
import { Loader } from 'components/Loader';
import { ConfirmDialog } from 'components/ConfirmDialog';
import { Box } from '@material-ui/core';
import BackIcon from 'components/BackIcon/BackIcon';

const ApplyAVD = () => {
  const [data, loading, error] = useLoadToolAVD();
  const history = useHistory();
  const [isOpenSaveDialog, setisOpenSaveDialog] = useState(false);
  const [isOpenCancelDialog, setisOpenCancelDialog] = useState(false);
  const [isLoadingSave, setisLoadingSave] = useState(false);
  const [isLoadingCancel, setisLoadingCancel] = useState(false);

  const openSaveDialog = () => setisOpenSaveDialog(true);
  const closeSaveDialog = () => setisOpenSaveDialog(false);
  const openCancelDialog = () => setisOpenCancelDialog(true);
  const closeCancelDialog = () => setisOpenCancelDialog(false);

  const submitForm = () => {
    setisLoadingSave(true);
    setTimeout(() => {
      history.push('/');
    }, 2000);
  };

  const cancelForm = () => {
    setisLoadingCancel(true);
    setTimeout(() => {
      history.push('/');
    }, 2000);
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
        tool="AVD"
      />
      <ConfirmDialog
        isOpenDialog={isOpenCancelDialog}
        handleClose={closeCancelDialog}
        isLoading={isLoadingCancel}
        onSubmit={cancelForm}
        type="CANCEL"
        tool="AVD"
      />
      <Box margin="0.5rem">
        <BackIcon onClick={openCancelDialog} />
        <Box paddingX="2rem">
          <LoadTool toolData={data} onSubmit={openSaveDialog} type="AVD" />
        </Box>
      </Box>
    </>
  );
};

export default ApplyAVD;
