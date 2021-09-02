import { Box, Typography, Icon } from '@material-ui/core';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '0.5rem',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.palette.grey[100],
    },
  },
  icon: {
    marginRight: '0.5rem',
  },
}));

const MenuItem = (props) => {
  const { iconName, value, active, onClick } = props;
  const classes = useStyles();
  const color = active ? 'primary' : 'inherit';
  return (
    <Box
      className={classes.container}
      display="flex"
      alignItems="center"
      onClick={onClick}
    >
      <Icon className={classes.icon} color={color}>
        {iconName}
      </Icon>
      <Typography variant="caption" color={color}>
        {value}
      </Typography>
    </Box>
  );
};

MenuItem.propTypes = {
  iconName: PropTypes.string, // NAME OF THE ICON WOULD BE LOADED
  value: PropTypes.string, // TEXT SHOWED ON MENU ITEM
  active: PropTypes.bool, // FLAG TO KNOW IF THE MENUITEM IS ACTIVE
  onClick: PropTypes.func, //ONCLICK FUNCTION
};

export default MenuItem;
