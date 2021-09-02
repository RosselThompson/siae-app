import { IconButton } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import PropTypes from 'prop-types';

const BurgerIcon = (props) => {
  const { onClick } = props;
  return (
    <IconButton onClick={onClick} color="inherit">
      <MenuIcon />
    </IconButton>
  );
};

BurgerIcon.propTypes = {
  onClick: PropTypes.func, // ONCLICK FUNCTION
};

export default BurgerIcon;
