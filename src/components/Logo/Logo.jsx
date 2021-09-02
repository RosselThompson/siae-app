import { useTranslation } from 'react-i18next';
import { Box, Typography, useMediaQuery, useTheme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  logo: {
    marginLeft: '1rem',
    marginRight: '0.5rem',
  },
}));

const Logo = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box display="flex" alignItems="center">
      <img
        className={classes.logo}
        src="/static/icons/logo_uni.png"
        alt="logoUNI"
        height="25"
        width="45"
      />
      {isDesktop ? <Typography variant="body2">{t('title')}</Typography> : null}
    </Box>
  );
};

export default Logo;
