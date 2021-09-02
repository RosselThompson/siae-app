import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Typography } from '@material-ui/core';
import { Modal } from 'components/Modal';
import { FormButton } from 'components/FormButton';
import PropTypes from 'prop-types';

const ManageToolDelete = (props) => {
  const { openForm, handleClose, selectedRow } = props;
  const { t } = useTranslation();
  const [isLoading, setisLoading] = useState(false);

  const handleSubmit = () => {
    setisLoading(true);
    console.log(selectedRow);
    setTimeout(() => {
      setisLoading(false);
    }, 1000);
  };

  return (
    <Modal
      opened={openForm}
      onClose={handleClose}
      title={t('manageTool.delete.title')}
    >
      <Typography align="center">{t('manageTool.delete.body')}</Typography>
      <Box marginTop="1rem" textAlign="center">
        <Typography variant="caption" color="textSecondary">
          {t('manageTool.delete.info')}
        </Typography>
      </Box>
      <FormButton
        text={t('button.delete')}
        loadingText={t('button.isLoading')}
        isLoading={isLoading}
        type="button"
        onClick={handleSubmit}
      />
    </Modal>
  );
};

ManageToolDelete.propTypes = {
  openForm: PropTypes.bool, // OPEN FORM
  handleClose: PropTypes.func, // ONCLOSE FUNCTION
  selectedRow: PropTypes.object, //SELECTED ROW
};

export default ManageToolDelete;
