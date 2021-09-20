import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@material-ui/core';
import { Modal } from 'components/Modal';
import { FormButton } from 'components/FormButton';
import PropTypes from 'prop-types';

const AspectDelete = (props) => {
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
      title={t('aspects.delete.title')}
    >
      <Typography align="center">{t('aspects.delete.body')}</Typography>
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

AspectDelete.propTypes = {
  openForm: PropTypes.bool, // OPEN FORM
  handleClose: PropTypes.func, // ONCLOSE FUNCTION
  selectedRow: PropTypes.object, //SELECTED ROW
};

export default AspectDelete;
