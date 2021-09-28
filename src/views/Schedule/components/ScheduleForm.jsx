import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Formik, Form } from 'formik';
import { Modal } from 'components/Modal';
import { FormButton } from 'components/FormButton';
import { SelectInput } from 'components/Inputs/SelectInput';
import { DatePickerInput } from 'components/Inputs/DatePickerInput';
import { yearType, semesterType } from 'constants/types';
import { scheduleSchema } from 'helpers/schemas';
import PropTypes from 'prop-types';

const ScheduleForm = (props) => {
  const { openForm, handleClose, isEditing, selectedRow, faculties } = props;
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
    <Modal
      opened={openForm}
      onClose={handleClose}
      title={t('schedule.form.title')}
    >
      <Formik
        initialValues={{
          faculty: isEditing ? selectedRow?.sedeFacultad : '',
          year: isEditing ? selectedRow?.anio : '',
          semester: isEditing ? selectedRow?.semestre : '',
          startDate: isEditing ? selectedRow?.fechaInicio : '',
          endDate: isEditing ? selectedRow?.fechaFin : '',
        }}
        validateOnChange={false}
        validateOnBlur={false}
        validationSchema={scheduleSchema()}
        onSubmit={handleSubmit}
      >
        <Form>
          <SelectInput
            data={faculties}
            fieldValue="nombre"
            name="faculty"
            title={t('schedule.form.input.faculty')}
          />
          <SelectInput
            data={yearType}
            name="year"
            title={t('schedule.form.input.year')}
          />
          <SelectInput
            data={semesterType}
            name="semester"
            title={t('schedule.form.input.semester')}
          />
          <DatePickerInput
            title={t('schedule.form.input.startDate')}
            name="startDate"
          />
          <DatePickerInput
            title={t('schedule.form.input.endDate')}
            name="endDate"
          />
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

ScheduleForm.propTypes = {
  openForm: PropTypes.bool, // OPEN FORM
  handleClose: PropTypes.func, // ONCLOSE FUNCTION
  isEditing: PropTypes.bool, //IS EDITING
  selectedRow: PropTypes.object, // SELECTED ROW
  faculties: PropTypes.array, // FACULTIES DATA
};

export default ScheduleForm;
