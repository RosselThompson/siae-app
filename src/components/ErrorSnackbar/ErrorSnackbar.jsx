import { useState } from 'react';
import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import PropTypes from 'prop-types';
import getErrorObject from 'helpers/getErrorObject';

const Alert = (props) => <MuiAlert elevation={6} variant="filled" {...props} />;

const Error = (props) => {
  const { error } = props;
  const [open, setopen] = useState(true);
  const errorObject = getErrorObject(error);

  const handleClose = () => setopen(false);

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <Alert severity={errorObject.type}>{errorObject.message}</Alert>
    </Snackbar>
  );
};
Error.propTypes = {
  error: PropTypes.object, // Error Object
};

export default Error;
