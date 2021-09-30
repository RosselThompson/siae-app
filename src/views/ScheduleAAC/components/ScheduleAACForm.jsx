import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Formik, Form } from 'formik';
import { SelectInput } from 'components/Inputs/SelectInput';
import { MultiSelectInput } from 'components/Inputs/MultiSelectInput';
import { DatePickerInput } from 'components/Inputs/DatePickerInput';
import { TimePickerInput } from 'components/Inputs/TimePickerInput';
import { Modal } from 'components/Modal';
import { FormButton } from 'components/FormButton';
import { scheduleAACSchema } from 'helpers/schemas';
import { getDateByTime } from 'helpers/dateFormat';
import PropTypes from 'prop-types';

const ScheduleAACForm = (props) => {
  const {
    openForm,
    handleClose,
    isEditing,
    selectedRow,
    generalScheduleData,
    professorCourseData,
    professorData,
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
      title={t('scheduleAAC.form.title')}
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
            title={t('scheduleAAC.form.input.generalSchedule')}
            fieldValue={(e) =>
              `${e?.sedeFacultad?.nombre} - ${e?.semestre} ${e?.anio}`
            }
          />
          <SelectInput
            data={professorCourseData}
            name="professorCourse"
            title={t('scheduleAAC.form.input.professorCourse')}
            fieldValue={(e) =>
              `${e.docente.nombres} ${e.docente.apellidos} - ${e.curso.codigoCurso}`
            }
          />
          <MultiSelectInput
            data={professorData}
            name="professorInvited"
            title={t('scheduleAAC.form.input.professorInvited')}
            fieldValue={(e) => `${e.nombres} ${e.apellidos}`}
          />
          <DatePickerInput
            name="date"
            title={t('scheduleAAC.form.input.date')}
          />
          <TimePickerInput
            name="startTime"
            title={t('scheduleAAC.form.input.startTime')}
          />
          <TimePickerInput
            name="endTime"
            title={t('scheduleAAC.form.input.endTime')}
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

ScheduleAACForm.propTypes = {
  openForm: PropTypes.bool, // OPEN FORM
  handleClose: PropTypes.func, // ONCLOSE FUNCTION
  isEditing: PropTypes.bool, //IS EDITING
  selectedRow: PropTypes.object, // SELECTED ROW
  generalScheduleData: PropTypes.array, // GENERAL SCHEDULES TO FILL SELECT INPUT
  professorCourseData: PropTypes.array, // PROFESSOR COURSES TO FILL SELECT INPUT
  professorData: PropTypes.array, // PROFESSOR TO FILL SELECT INPUT
};

export default ScheduleAACForm;
