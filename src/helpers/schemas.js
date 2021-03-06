import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';

export const roleSchema = () => {
  const { t } = useTranslation();
  return Yup.object().shape({
    role: Yup.string().required(t('field.isRequired')),
  });
};

export const userSchema = () => {
  const { t } = useTranslation();
  return Yup.object().shape({
    email: Yup.string()
      .required(t('field.isRequired'))
      .email(t('field.isEmail')),
    firstName: Yup.string().required(t('field.isRequired')),
    lastName: Yup.string().required(t('field.isRequired')),
    password: Yup.string()
      .required(t('field.isRequired'))
      .min(6, t('field.isMinPassword')),
    confirmPassword: Yup.string()
      .required(t('field.isRequired'))
      .oneOf([Yup.ref('password'), null], t('field.isMatchedPassword')),
    role: Yup.array().min(1, t('field.isRequired')),
  });
};

export const aspectSchema = () => {
  const { t } = useTranslation();
  return Yup.object().shape({
    name: Yup.string().required(t('field.isRequired')),
  });
};

export const variableSchema = () => {
  const { t } = useTranslation();
  return Yup.object().shape({
    name: Yup.string().required(t('field.isRequired')),
  });
};

export const toolSchema = () => {
  const { t } = useTranslation();
  return Yup.object().shape({
    name: Yup.string().required(t('field.isRequired')),
  });
};

export const criteriaSchema = () => {
  const { t } = useTranslation();
  return Yup.object().shape({
    name: Yup.string().required(t('field.isRequired')),
    type: Yup.object().required(t('field.isRequired')),
    group: Yup.object().required(t('field.isRequired')),
    options: Yup.string().when('type', {
      is: (type) => type?.id === 3,
      then: Yup.string().required(t('field.isRequired')),
    }),
  });
};

export const scheduleSchema = () => {
  const { t } = useTranslation();
  return Yup.object().shape({
    faculty: Yup.object().required(t('field.isRequired')),
    year: Yup.string().required(t('field.isRequired')),
    semester: Yup.string().required(t('field.isRequired')),
    startDate: Yup.date().required(t('field.isRequired')),
    endDate: Yup.date()
      .min(
        Yup.ref('startDate'),
        t('field.greaterThan', {
          value1: t('schedule.form.input.endDate'),
          value2: t('schedule.form.input.startDate'),
        })
      )
      .required(t('field.isRequired')),
  });
};

export const scheduleAACSchema = () => {
  const { t } = useTranslation();
  return Yup.object().shape({
    generalSchedule: Yup.object().required(t('field.isRequired')),
    professorCourse: Yup.object().required(t('field.isRequired')),
    date: Yup.date().required(t('field.isRequired')),
    startTime: Yup.date().required(t('field.isRequired')),
    endTime: Yup.date()
      .min(
        Yup.ref('startTime'),
        t('field.greaterThan', {
          value1: t('scheduleAAC.form.input.endTime'),
          value2: t('scheduleAAC.form.input.startTime'),
        })
      )
      .required(t('field.isRequired')),
  });
};

export const verifyCodeVEDSchema = () => {
  const { t } = useTranslation();
  return Yup.object().shape({
    code: Yup.string().required(t('field.isRequired')),
  });
};

export const searchFacultySchema = () => {
  const { t } = useTranslation();
  return Yup.object().shape({
    faculty: Yup.object().required(t('field.isRequired')),
  });
};

export const searchDepSchema = () => {
  const { t } = useTranslation();
  return Yup.object().shape({
    department: Yup.object().required(t('field.isRequired')),
  });
};
