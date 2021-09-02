import { BurgerIcon } from 'components/BurgerIcon';
import { Logo } from 'components/Logo';
import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';

const Navbar = (props) => {
  const { onClick } = props;
  return (
    <Box display="flex" width="100%">
      <Logo />
      <Box flexGrow="1" textAlign="end">
        <BurgerIcon onClick={onClick} />
      </Box>
    </Box>
  );
};

Navbar.propTypes = {
  onClick: PropTypes.func, // ONCLICK FUNCTION TO BURGER ICON IN ORDER TO CLOSE THE MENU DRAWER
};

export default Navbar;
