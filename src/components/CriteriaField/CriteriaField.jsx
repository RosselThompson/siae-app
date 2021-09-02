import { useTranslation } from 'react-i18next';
import { Box, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

const CriteriaField = () => {
  const { t } = useTranslation();
  return (
    <>
      <Box marginBottom="0.5rem">
        <Typography variant="caption">{t('criteriaField.title')}</Typography>
      </Box>
    </>
  );
};

CriteriaField.propTypes = {
  name: PropTypes.string, //FIELD NAME
};

export default CriteriaField;
