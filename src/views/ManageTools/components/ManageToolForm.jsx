import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Formik, Form } from 'formik';
import { Modal } from 'components/Modal';
import { FormButton } from 'components/FormButton';
import { TextInput } from 'components/Inputs/TextInput';
import { TabPanel } from 'components/TabPanel';
import { TabsContainer } from 'components/TabsContainer';
import PropTypes from 'prop-types';

const ManageToolForm = (props) => {
  const { openForm, handleClose, isEditing, selectedRow } = props;
  const { t } = useTranslation();
  const [isLoading, setisLoading] = useState(false);
  const [tab, settab] = useState(0);

  const handleChangeTab = (_, newValue) => {
    settab(newValue);
  };

  const handleSubmit = (values) => {
    setisLoading(true);
    console.log(values);
    setTimeout(() => {
      setisLoading(false);
    }, 1000);
  };

  return (
    <Modal
      opened={openForm}
      onClose={handleClose}
      title={t('manageTool.form.title')}
    >
      <Formik
        initialValues={{
          name: isEditing ? selectedRow.nombre : '',
        }}
        validateOnChange={false}
        validateOnBlur={false}
        // validationSchema={userSchema()}
        onSubmit={handleSubmit}
      >
        <Form>
          <TabsContainer
            value={tab}
            onChange={handleChangeTab}
            tabs={['Aspecto', 'Criterios']}
          />
          <TabPanel value={tab} index={0}>
            <TextInput name="name" title={t('manageTools.form.input.name')} />
          </TabPanel>
          <TabPanel value={tab} index={1}>
            <TextInput
              name="name"
              title={t('manageTools.form.input.criteria.name')}
            />
            <TextInput
              name="type"
              title={t('manageTools.form.input.criteria.type')}
            />
            <TextInput
              name="group"
              title={t('manageTools.form.input.criteria.group')}
            />
          </TabPanel>

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

ManageToolForm.propTypes = {
  openForm: PropTypes.bool, // OPEN FORM
  handleClose: PropTypes.func, // ONCLOSE FUNCTION
  isEditing: PropTypes.bool, //IS EDITING
  selectedRow: PropTypes.object, // SELECTED ROW
};

export default ManageToolForm;
