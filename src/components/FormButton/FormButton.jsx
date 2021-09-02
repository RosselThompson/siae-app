import { Button, Box, CircularProgress, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    boxShadow: '0px 10px 30px rgb(128 141 145 / 40%)',
    backgroundColor: theme.palette.common.white,
  },
  button: {
    padding: '0.75rem',
  },
  buttonText: {
    textTransform: 'none',
  },
}));

const FormButton = (props) => {
  const {
    text,
    loadingText,
    isLoading = false,
    onClick = () => {},
    type = 'button',
  } = props;
  const classes = useStyles();
  const loadingComponent = (
    <Box display="flex" alignItems="center">
      <CircularProgress color="inherit" size="1rem" />
      <Box marginLeft="1rem">
        <Typography className={classes.buttonText} variant="caption">
          {loadingText}
        </Typography>
      </Box>
    </Box>
  );
  return (
    <Box
      className={classes.container}
      flex="0 0 auto"
      display="flex"
      position="absolute"
      bottom={0}
      left={0}
      width="100%"
      zIndex={1}
    >
      <Box width="100%" margin="1rem">
        <Button
          fullWidth
          className={classes.button}
          color="primary"
          variant="contained"
          disabled={isLoading}
          tabIndex={0}
          type={type}
          onClick={onClick}
        >
          {!isLoading ? (
            <Typography className={classes.buttonText} variant="caption">
              {text}
            </Typography>
          ) : (
            loadingComponent
          )}
        </Button>
      </Box>
    </Box>
  );
};

FormButton.propTypes = {
  text: PropTypes.string, // BUTTON TEXT
  loadingText: PropTypes.string, //BUTTON LOADING TEXT
  isLoading: PropTypes.bool, // BUTTON IS LOADING
  onClick: PropTypes.func, // ONCLICK BUTTON
  type: PropTypes.string, // TYPE BUTTON
};

export default FormButton;
