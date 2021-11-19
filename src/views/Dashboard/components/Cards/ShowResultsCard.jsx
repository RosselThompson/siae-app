import { Typography, Box, Grow, Button } from '@material-ui/core';
import { CloudDownload, ShowChart } from '@material-ui/icons';
import { Card } from 'components/Card';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  icon: {
    color: theme.palette.grey[400],
    fontSize: '4.5rem',
    animation: '',
  },
  iconActive: {
    color: theme.palette.common.white,
    fontSize: '4.5rem',
  },
  buttonText: {
    marginLeft: '0.5rem',
    textTransform: 'none',
  },
}));

const ShowResultsCard = (props) => {
  const { isAvailable } = props;
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <Card title={t('dashboard.showResults.card.title')} filled={isAvailable}>
      <Box marginTop="2.5rem">
        <Box textAlign="center">
          <Grow in timeout={1000}>
            <ShowChart
              className={isAvailable ? classes.iconActive : classes.icon}
            />
          </Grow>
          <Box marginX="1rem" marginTop={isAvailable ? '0.5rem' : '2rem'}>
            <Typography
              variant="caption"
              color={isAvailable ? 'initial' : 'textSecondary'}
            >
              {isAvailable
                ? t('dashboard.showResults.card.available')
                : t('dashboard.showResults.card.notAvailable')}
            </Typography>
          </Box>
        </Box>
      </Box>
      {isAvailable && (
        <Box textAlign="center" marginTop="1.5rem">
          <Button fullWidth variant="outlined" color="inherit">
            <CloudDownload />
            <Typography className={classes.buttonText} variant="caption">
              {t('reportCard.button.text')}
            </Typography>
          </Button>
        </Box>
      )}
    </Card>
  );
};

ShowResultsCard.propTypes = {
  isAvailable: PropTypes.bool, // PROFESSOR RESULTS ALREADY ARE AVAILABLE
};

export default ShowResultsCard;
