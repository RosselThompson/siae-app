import { useTranslation } from 'react-i18next';

const getErrorObject = (error) => {
  const { t } = useTranslation();
  const status = !error ? 500 : error.status; //DEFAULT ERROR OBJECT
  const errors = {
    400: { type: 'error', message: t('error.400') },
    401: { type: 'warning', message: t('error.401') },
    404: { type: 'error', message: t('error.404') },
    default: {
      type: 'error',
      message: t('error.default'),
    },
  };
  return errors[status] || errors.default;
};

export default getErrorObject;
