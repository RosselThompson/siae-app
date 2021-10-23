import { Typography, Box } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

const NotFound = () => {
  const { t } = useTranslation();
  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant="h5">{t('error.page.NotFound')}</Typography>
    </Box>
  );
};

export default NotFound;
