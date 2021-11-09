import { useTranslation } from 'react-i18next';
import { Box, Typography, useMediaQuery, useTheme } from '@material-ui/core';
import { MidContainer } from 'components/MidContainer';

const Completed = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
    noSsr: true,
  });

  return (
    <MidContainer>
      <Box marginTop="2rem" textAlign="center">
        <img
          src={'static/icons/completed-ved.svg'}
          alt="bg-image"
          width="300px"
          height="400px"
        />
      </Box>
      <Box marginX={isDesktop ? '2rem' : '0'}>
        <Box textAlign="center" marginTop="1rem">
          <Typography variant="h6">{t('applyVED.completed.title')}</Typography>
        </Box>
        <Box textAlign="center" marginTop="2rem">
          <Typography variant="caption">
            {t('applyVED.completed.body')}
          </Typography>
        </Box>
      </Box>
    </MidContainer>
  );
};

export default Completed;
