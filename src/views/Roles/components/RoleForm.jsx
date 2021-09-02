import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Modal } from 'components/Modal';
import { FormButton } from 'components/FormButton';
import { TextInput } from 'components/Inputs/TextInput';
import { PermissionsField } from 'components/PermissionsField';
import { Formik, Form } from 'formik';
import { roleSchema } from 'helpers/schemas';
import PropTypes from 'prop-types';
import { Menu } from 'mock/mockData';

const RoleForm = (props) => {
  const { openForm, handleClose, isEditing, selectedRow } = props;
  const { t } = useTranslation();
  const [isLoading, setisLoading] = useState(false);

  const handleSubmit = (values) => {
    setisLoading(true);
    console.log(values);
    setTimeout(() => {
      setisLoading(false);
    }, 1000);
  };
  return (
    <Modal opened={openForm} onClose={handleClose} title={t('role.form.title')}>
      <Formik
        initialValues={{
          role: isEditing ? selectedRow.nombreRol : '',
          permissions: isEditing ? selectedRow.permisos : [],
        }}
        validateOnChange={false}
        validateOnBlur={false}
        validationSchema={roleSchema()}
        onSubmit={handleSubmit}
      >
        <Form>
          <TextInput name="role" title={t('role.form.input.name')} />
          <PermissionsField name="permissions" modules={Menu} />
          <FormButton
            text={!isEditing ? t('button.save') : t('button.edit')}
            loadingText={t('button.isLoading')}
            isLoading={isLoading}
            type="submit"
          />
        </Form>
      </Formik>
    </Modal>
  );
};

RoleForm.propTypes = {
  openForm: PropTypes.bool, // OPEN FORM
  handleClose: PropTypes.func, // ONCLOSE FUNCTION
  isEditing: PropTypes.bool, //IS EDITING
  selectedRow: PropTypes.object, // SELECTED ROW
};

export default RoleForm;
