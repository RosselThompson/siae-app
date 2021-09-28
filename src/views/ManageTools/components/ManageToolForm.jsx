import { useState } from 'react';
import { Box, Typography } from '@material-ui/core';
import { useTranslation, Trans } from 'react-i18next';
import { Formik, Form } from 'formik';
import { Modal } from 'components/Modal';
import { FormButton } from 'components/FormButton';
import { TextInput } from 'components/Inputs/TextInput';
import { TabPanel } from 'components/TabPanel';
import { TabsContainer } from 'components/TabsContainer';
import { ActionButton } from 'components/ActionButton';
import { TagList } from 'components/TagList';
import { SelectInput } from 'components/Inputs/SelectInput';
import { toolSchema, criteriaSchema } from 'helpers/schemas';
import { getAspectGroup } from 'helpers/getAspectGroup';
import { criteriaType } from 'constants/types';
import PropTypes from 'prop-types';

const ManageToolForm = (props) => {
  const { openForm, handleClose, isEditing, selectedRow, aspectData } = props;
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

  const handleSubmitCriteria = (values, data, onChange, actions) => {
    onChange('criteria', [
      ...data,
      {
        nombre: values?.name,
        type: values?.type,
        group: values?.group,
        options: values?.options,
      },
    ]);
    actions.resetForm();
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
          criteria: isEditing ? selectedRow.criterios : [],
        }}
        validateOnChange={false}
        validateOnBlur={false}
        validationSchema={toolSchema()}
        onSubmit={handleSubmitForm}
      >
        {({ values, setFieldValue }) => (
          <Form>
            <TabsContainer
              value={tab}
              onChange={handleChangeTab}
              tabs={['Aspecto', 'Criterios']}
            />
            <TabPanel value={tab} index={0}>
              <TextInput
                name="name"
                title={t('manageTool.form.aspect.input.name')}
              />
            </TabPanel>
            <TabPanel value={tab} index={1}>
              <Formik
                initialValues={{
                  name: '',
                  type: '',
                  group: '',
                  options: '',
                }}
                validationSchema={criteriaSchema()}
                validateOnChange={false}
                validateOnBlur={false}
                onSubmit={(val, actions) => {
                  handleSubmitCriteria(
                    val,
                    values?.criteria,
                    setFieldValue,
                    actions
                  );
                }}
              >
                {({ handleSubmit }) => (
                  <Form>
                    <Box marginY="1rem">
                      <Typography variant="caption" color="textSecondary">
                        <Trans
                          i18nKey="manageTool.form.criteria.info"
                          components={[<strong key="0" />]}
                        />
                      </Typography>
                    </Box>
                    <TextInput
                      name="name"
                      title={t('manageTool.form.criteria.input.name')}
                    />
                    <SelectInput
                      data={getAspectGroup(aspectData)}
                      fieldValue="name"
                      name="group"
                      title={t('manageTool.form.criteria.input.group')}
                      groupBy="group"
                    />
                    <SelectInput
                      data={criteriaType}
                      fieldValue="name"
                      name="type"
                      title={t('manageTool.form.criteria.input.type')}
                    />
                    <TextInput
                      name="options"
                      title={t('manageTool.form.criteria.input.options')}
                    />
                    <ActionButton
                      text={t('manageTool.form.criteria.button')}
                      onClick={handleSubmit}
                    />

                    <TagList
                      dataList={values?.criteria}
                      fieldValue="nombre"
                      onChange={(chipToDelete) =>
                        setFieldValue(
                          'criteria',
                          values?.criteria.filter(
                            (e) => e?.nombre !== chipToDelete?.nombre
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

ManageToolForm.propTypes = {
  openForm: PropTypes.bool, // OPEN FORM
  handleClose: PropTypes.func, // ONCLOSE FUNCTION
  isEditing: PropTypes.bool, //IS EDITING
  selectedRow: PropTypes.object, // SELECTED ROW
  aspectData: PropTypes.array, // ASPECT DATA FOR SELECT INPUT
};

export default ManageToolForm;
