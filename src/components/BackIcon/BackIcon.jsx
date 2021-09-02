import { IconButton } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import PropTypes from 'prop-types';

const BackIcon = (props) => {
  const { onClick } = props;
  return (
    <IconButton onClick={onClick} color="inherit">
      <ArrowBack />
    </IconButton>
  );
};

BackIcon.propTypes = {
  onClick: PropTypes.func, // ONCLICK FUNCTION
};

export default BackIcon;
