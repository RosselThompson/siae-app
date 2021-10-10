import { Typography, Box, Chip, Grow } from '@material-ui/core';
import { Assessment, CheckCircleOutline } from '@material-ui/icons';
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
    color: theme.palette.primary.main,
    fontSize: '4.5rem',
  },
  cardSubtitle: {
    fontSize: '10px',
    lineHeight: '0.5',
  },
  button: {
    borderRadius: '5px',
  },
}));

const StatusAVDCard = (props) => {
  const { isCompleted } = props;
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <Card title={t('dashboard.statusAVD.card.title')}>
      <Box marginTop={isCompleted ? '2.5em' : '1.5em'}>
        <Box textAlign="center">
          <Grow in timeout={1000}>
            {isCompleted ? (
              <CheckCircleOutline className={classes.iconActive} />
            ) : (
              <Assessment className={classes.icon} />
            )}
          </Grow>
          <Box marginX="1rem" marginTop="0.3rem">
            <Typography
              className={classes.cardSubtitle}
              variant="caption"
              color="textSecondary"
            >
              {isCompleted
                ? t('dashboard.statusAVD.card.applied')
                : t('dashboard.statusAVD.card.notApplied')}
            </Typography>
          </Box>
        </Box>
      </Box>
      {!isCompleted && (
        <Box textAlign="center" marginTop="2rem">
          <Chip
            className={classes.button}
            label={
              <Typography variant="caption">
                {t('dashboard.statusAVD.card.button')}
              </Typography>
            }
            onClick={() => console.log('CTO')}
            color="primary"
            variant="outlined"
          />
        </Box>
      )}
    </Card>
  );
};

StatusAVDCard.propTypes = {
  isCompleted: PropTypes.bool, // USER ALREADY HAS BEEN FILLED AVD
};

export default StatusAVDCard;
