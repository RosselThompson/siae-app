import {
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
  Typography,
} from '@material-ui/core';
import { BackIcon } from 'components/BackIcon';
import PropTypes from 'prop-types';

const Modal = (props) => {
  const { opened, onClose, title, children } = props;
  return (
    <Dialog fullWidth maxWidth="xs" open={opened} onClose={onClose}>
      <DialogTitle>
        <Box display="flex" alignItems="center" width="100%">
          <BackIcon onClick={onClose} />
          <Box flexGrow="1" marginLeft="1rem">
            <Typography variant="h6"> {title} </Typography>
          </Box>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Box minHeight="4rem" marginBottom="5rem">
          {children}
        </Box>
      </DialogContent>
    </Dialog>
  );
};

Modal.propTypes = {
  opened: PropTypes.bool, //OPENED MODAL
  onClose: PropTypes.func, //FUNCTION TO CLOSE MODAL
  title: PropTypes.string, //FORM TITLE
  children: PropTypes.any, //CHILDREN FORM CONTENT
};

export default Modal;
