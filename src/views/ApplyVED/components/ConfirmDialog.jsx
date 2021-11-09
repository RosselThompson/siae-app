import { useTranslation } from 'react-i18next';
import { Modal } from 'components/Modal';
import { Typography } from '@material-ui/core';
import { FormButton } from 'components/FormButton';
import PropTypes from 'prop-types';

const ConfirmDialog = (props) => {
  const { onSubmit, handleClose, isLoading, isOpenDialog, type } = props;
  const { t } = useTranslation();
  return (
    <Modal
      opened={isOpenDialog}
      onClose={handleClose}
      title={t(`applyVED.confirmDialog.title.${type}`)}
    >
      <Typography align="center">
        {t(`applyVED.confirmDialog.body.${type}`)}
      </Typography>
      <FormButton
        text={t('button.confirm')}
        loadingText={t('button.isLoading')}
        isLoading={isLoading}
        type="button"
        onClick={onSubmit}
      />
    </Modal>
  );
};

ConfirmDialog.propTypes = {
  isOpenDialog: PropTypes.bool, //MODAL IS OPEN
  handleClose: PropTypes.func, //MODAL ON CLOSE FUNCTION
  isLoading: PropTypes.bool, //SUBMIT BUTTON IS LOADING
  onSubmit: PropTypes.func, //SUBMIT FUNCTION
  type: PropTypes.oneOf('CANCEL, SAVE'), //MODAL TYPE
};

export default ConfirmDialog;
