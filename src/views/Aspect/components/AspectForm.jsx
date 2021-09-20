import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Formik, Form } from 'formik';
import { Modal } from 'components/Modal';
import { FormButton } from 'components/FormButton';
import { TextInput } from 'components/Inputs/TextInput';
import { TabPanel } from 'components/TabPanel';
import { TabsContainer } from 'components/TabsContainer';
import { ActionButton } from 'components/ActionButton';
import { TagList } from 'components/TagList';
import { aspectSchema, variableSchema } from 'helpers/schemas';
import PropTypes from 'prop-types';

const AspectForm = (props) => {
  const { openForm, handleClose, isEditing, selectedRow } = props;
  const { t } = useTranslation();
  const [isLoading, setisLoading] = useState(false);
  const [tab, settab] = useState(0);

  const handleChangeTab = (_, newValue) => {
    settab(newValue);
  };

  const handleSubmitForm = (values) => {
    setisLoading(true);
    console.log(values);
    setTimeout(() => {
      setisLoading(false);
    }, 1000);
  };

  const handleSubmitVariable = (values, data, onChange, actions) => {
    onChange('variables', [
      ...data,
      {
        name: values?.name,
      },
    ]);
    actions.resetForm();
  };

  return (
    <Modal
      opened={openForm}
      onClose={handleClose}
      title={t('aspects.form.title')}
    >
      <Formik
        initialValues={{
          name: isEditing ? selectedRow.name : '',
          variables: isEditing ? selectedRow.variables : [],
        }}
        validateOnChange={false}
        validateOnBlur={false}
        validationSchema={aspectSchema()}
        onSubmit={handleSubmitForm}
      >
        {({ values, setFieldValue }) => (
          <Form>
            <TabsContainer
              value={tab}
              onChange={handleChangeTab}
              tabs={['Aspecto', 'Variables']}
            />
            <TabPanel value={tab} index={0}>
              <TextInput
                name="name"
                title={t('aspects.form.aspect.input.name')}
              />
            </TabPanel>
            <TabPanel value={tab} index={1}>
              <Formik
                initialValues={{
                  name: '',
                }}
                validationSchema={variableSchema()}
                validateOnChange={false}
                validateOnBlur={false}
                onSubmit={(val, actions) => {
                  handleSubmitVariable(
                    val,
                    values?.variables,
                    setFieldValue,
                    actions
                  );
                }}
              >
                {({ handleSubmit }) => (
                  <Form>
                    <TextInput
                      name="name"
                      title={t('aspects.form.variables.input.name')}
                    />
                    <ActionButton
                      text={t('aspects.form.variables.button')}
                      onClick={handleSubmit}
                    />

                    <TagList
                      dataList={values?.variables}
                      fieldValue="name"
                      onChange={(chipToDelete) =>
                        setFieldValue(
                          'variables',
                          values?.variables.filter(
                            (e) => e?.name !== chipToDelete?.name
                          )
                        )
                      }
                    />
                  </Form>
                )}
              </Formik>
            </TabPanel>

            <FormButton
              text={!isEditing ? t('button.save') : t('button.edit')}
              loadingText={t('button.isLoading')}
              isLoading={isLoading}
              type="submit"
            />
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

AspectForm.propTypes = {
  openForm: PropTypes.bool, // OPEN FORM
  handleClose: PropTypes.func, // ONCLOSE FUNCTION
  isEditing: PropTypes.bool, //IS EDITING
  selectedRow: PropTypes.object, // SELECTED ROW
};

export default AspectForm;
