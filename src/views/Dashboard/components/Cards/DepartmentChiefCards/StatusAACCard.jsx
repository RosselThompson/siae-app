import { Typography, Box, Grow, Grid } from '@material-ui/core';
import { SupervisedUserCircle } from '@material-ui/icons';
import { Card } from 'components/Card';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  icon: {
    color: theme.palette.grey[400],
    fontSize: '4.5rem',
    animation: '',
  },
  cardBody: {
    fontSize: '10px',
    lineHeight: '0.5',
  },
  redDot: {
    height: '10px',
    width: '10px',
    backgroundColor: theme.palette.secondary.main,
    borderRadius: ' 50%',
    margin: theme.spacing(1),
  },
  blueDot: {
    height: '10px',
    width: '10px',
    backgroundColor: theme.palette.primary.main,
    borderRadius: ' 50%',
    margin: theme.spacing(1),
  },
}));

const StatusAACCard = () => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <Card title={t('dashboard.dep.statusAAC.card.title')}>
      <Box marginTop="1.5em">
        <Box textAlign="center">
          <Grow in timeout={1000}>
            <SupervisedUserCircle className={classes.icon} />
          </Grow>
          <Box marginX="1rem">
            <Typography
              className={classes.cardBody}
              variant="caption"
              color="textSecondary"
            >
              {t('dashboard.dep.statusAAC.card.body')}
            </Typography>
          </Box>
          <Box marginX="1rem" marginTop="2rem">
            <Grid container>
              <Grid item xs={3} sm={3} md={3}>
                <div className={classes.redDot} />
                <div className={classes.blueDot} />
              </Grid>
              <Grid item xs={3} sm={3} md={3}>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="flex-end"
                >
                  <Typography variant="caption">20</Typography>
                  <Typography variant="caption">10</Typography>
                </Box>
              </Grid>
              <Grid item xs={6} sm={6} md={6}>
                <Box display="flex" flexDirection="column">
                  <Typography variant="caption">
                    {t('dashboard.dep.pending')}
                  </Typography>
                  <Typography variant="caption">
                    {t('dashboard.dep.applied')}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default StatusAACCard;
