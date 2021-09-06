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
  });
};
