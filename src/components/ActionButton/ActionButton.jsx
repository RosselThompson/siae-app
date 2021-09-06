import { Box, Button, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  buttonText: {
    textTransform: 'none',
  },
}));

const ActionButton = (props) => {
  const { text, onClick = () => {}, type = 'button' } = props;
  const classes = useStyles();
  return (
    <Box width="100%" textAlign="center">
      <Button tabIndex={0} type={type} onClick={onClick} variant="text">
        <Typography
          className={classes.buttonText}
          variant="caption"
          color="primary"
        >
          {text}
        </Typography>
      </Button>
    </Box>
  );
};

ActionButton.propTypes = {
  text: PropTypes.string, // BUTTON TEXT
  onClick: PropTypes.func, // BUTTON ONCLICK FUNCTION
  type: PropTypes.string, // BUTTON TYPE
};

export default ActionButton;
