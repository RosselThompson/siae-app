import { useState } from 'react';
import { useLoadToolVED } from 'hooks/useLoadToolVED';
import { Box } from '@material-ui/core';
import { LoadTool } from 'components/LoadTool';
import { Loader } from 'components/Loader';
import { BackIcon } from 'components/BackIcon';
import { ConfirmDialog } from 'components/ConfirmDialog';
import PropTypes from 'prop-types';

const Tool = (props) => {
  const { saveFn, cancelFn } = props;
  const [data, loading, error] = useLoadToolVED();
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
    saveFn();
  };

  const cancelForm = () => {
    setisLoadingCancel(true);
    cancelFn();
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
        tool="VED"
      />
      <ConfirmDialog
        isOpenDialog={isOpenCancelDialog}
        handleClose={closeCancelDialog}
        isLoading={isLoadingCancel}
        onSubmit={cancelForm}
        type="CANCEL"
        tool="VED"
      />
      <Box margin="0.5rem">
        <BackIcon onClick={openCancelDialog} />
        <Box paddingX="2rem">
          <LoadTool toolData={data} onSubmit={openSaveDialog} type="VED" />
        </Box>
      </Box>
    </>
  );
};

Tool.propTypes = {
  cancelFn: PropTypes.func, //CANCEL FUNCTION TO RETURN TO VERIFY CODE PAGE
  saveFn: PropTypes.func, //SAVE FUNCTION WHEN DIALOG IS CONFIRMED
};

export default Tool;
