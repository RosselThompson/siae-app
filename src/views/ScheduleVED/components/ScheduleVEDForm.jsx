import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Formik, Form } from 'formik';
import { SelectInput } from 'components/Inputs/SelectInput';
import { DatePickerInput } from 'components/Inputs/DatePickerInput';
import { TimePickerInput } from 'components/Inputs/TimePickerInput';
import { Modal } from 'components/Modal';
import { FormButton } from 'components/FormButton';
import { scheduleAACSchema } from 'helpers/schemas';
import { getDateByTime } from 'helpers/dateFormat';
import PropTypes from 'prop-types';

const ScheduleVEDForm = (props) => {
  const {
    openForm,
    handleClose,
    isEditing,
    selectedRow,
    generalScheduleData,
    professorCourseData,
  } = props;
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
      title={t('scheduleVED.form.title')}
    >
      <Formik
        initialValues={{
          generalSchedule: isEditing ? selectedRow?.planificacionGeneral : '',
          professorCourse: isEditing ? selectedRow?.docenteCurso : '',
          professorInvited: isEditing ? selectedRow?.docentesInvitados : [],
          date: isEditing ? selectedRow?.fechaAplicacion : '',
          startTime: isEditing ? getDateByTime(selectedRow?.horaInicio) : '',
          endTime: isEditing ? getDateByTime(selectedRow?.horaFin) : '',
        }}
        validateOnChange={false}
        validateOnBlur={false}
        validationSchema={scheduleAACSchema()}
        onSubmit={handleSubmit}
      >
        <Form>
          <SelectInput
            data={generalScheduleData}
            name="generalSchedule"
            title={t('scheduleVED.form.input.generalSchedule')}
            fieldValue={(e) =>
              `${e?.sedeFacultad?.nombre} - ${e?.semestre} ${e?.anio}`
            }
          />
          <SelectInput
            data={professorCourseData}
            name="professorCourse"
            title={t('scheduleVED.form.input.professorCourse')}
            fieldValue={(e) =>
              `${e.docente.nombres} ${e.docente.apellidos} - ${e.curso.codigoCurso}`
            }
          />
          <DatePickerInput
            name="date"
            title={t('scheduleVED.form.input.date')}
          />
          <TimePickerInput
            name="startTime"
            title={t('scheduleVED.form.input.startTime')}
          />
          <TimePickerInput
            name="endTime"
            title={t('scheduleVED.form.input.endTime')}
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

ScheduleVEDForm.propTypes = {
  openForm: PropTypes.bool, // OPEN FORM
  handleClose: PropTypes.func, // ONCLOSE FUNCTION
  isEditing: PropTypes.bool, //IS EDITING
  selectedRow: PropTypes.object, // SELECTED ROW
  generalScheduleData: PropTypes.array, // GENERAL SCHEDULES TO FILL SELECT INPUT
  professorCourseData: PropTypes.array, // PROFESSOR COURSES TO FILL SELECT INPUT
};

export default ScheduleVEDForm;
