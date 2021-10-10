import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Typography, Box } from '@material-ui/core';
import { Formik, Form } from 'formik';
import { Modal } from 'components/Modal';
import { FormButton } from 'components/FormButton';
import { TextInput } from 'components/Inputs/TextInput';
import { SelectInput } from 'components/Inputs/SelectInput';
import { MultiSelectInput } from 'components/Inputs/MultiSelectInput';
import { userSchema } from 'helpers/schemas';
import { DASHBOARD_TYPE } from 'constants/types';
import PropTypes from 'prop-types';

const UserForm = (props) => {
  const { openForm, handleClose, isEditing, selectedRow, roleData } = props;
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
    <Modal opened={openForm} onClose={handleClose} title={t('user.form.title')}>
      <Formik
        initialValues={{
          firstName: isEditing ? selectedRow.firstName : '',
          lastName: isEditing ? selectedRow.lastName : '',
          email: isEditing ? selectedRow.email : '',
          password: isEditing ? selectedRow.password : '',
          confirmPassword: isEditing ? selectedRow.password : '',
          role: isEditing ? selectedRow.rol : [],
          dashboard: isEditing ? selectedRow.dashboard : '',
        }}
        validateOnChange={false}
        validateOnBlur={false}
        validationSchema={userSchema()}
        onSubmit={handleSubmit}
      >
        <Form>
          <TextInput name="email" title={t('user.form.input.email')} />
          <TextInput name="firstName" title={t('user.form.input.firstName')} />
          <TextInput name="lastName" title={t('user.form.input.lastName')} />
          <MultiSelectInput
            name="role"
            title={t('user.form.input.role')}
            data={roleData}
            fieldValue="nombreRol"
          />
          <SelectInput
            name="dashboard"
            title={t('user.form.input.dashboard')}
            data={DASHBOARD_TYPE}
            fieldValue="name"
          />
          <TextInput
            name="password"
            type="password"
            title={t('user.form.input.password')}
          />
          <TextInput
            name="confirmPassword"
            type="password"
            title={t('user.form.input.confirmPassword')}
          />
          <Box textAlign="center">
            <Typography variant="caption" color="textSecondary">
              {t('user.form.infoMessage')}
            </Typography>
          </Box>
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

UserForm.propTypes = {
  openForm: PropTypes.bool, // OPEN FORM
  handleClose: PropTypes.func, // ONCLOSE FUNCTION
  isEditing: PropTypes.bool, //IS EDITING
  selectedRow: PropTypes.object, // SELECTED ROW
  roleData: PropTypes.array, // ROLE DATA TO FILL SELECT INPUT
};

export default UserForm;
