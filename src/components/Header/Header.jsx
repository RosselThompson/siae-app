import { Trans, useTranslation } from 'react-i18next';
import { Typography, Avatar, Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  avatarPrimary: {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
  },
}));

const Header = (props) => {
  const { userName, title } = props;
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <>
      <Box display="flex" alignItems="center">
        <Box marginRight="1rem">
          <Avatar className={classes.avatarPrimary}>
            {userName ? userName.charAt(0) : null}
          </Avatar>
        </Box>
        <Typography variant="h5">
          <Trans
            i18nKey="header"
            values={{ name: userName }}
            components={[<strong key="0" />]}
          />
        </Typography>
      </Box>
      <Box marginTop="2rem">
        <Typography>{t(title)}</Typography>
      </Box>
    </>
  );
};

Header.propTypes = {
  userName: PropTypes.string, // NAME OF THE USER THAT WOULD BE SHOWED
  title: PropTypes.string, // SCREEN TITLE
};

export default Header;
