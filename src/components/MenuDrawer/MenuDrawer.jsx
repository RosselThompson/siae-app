import { Drawer } from '@material-ui/core';
import PropTypes from 'prop-types';

const MenuDrawer = (props) => {
  const { opened, onClose, children } = props;
  return (
    <Drawer anchor="right" open={opened} onClose={onClose}>
      {children}
    </Drawer>
  );
};

MenuDrawer.propTypes = {
  opened: PropTypes.bool, //OPEN MENU DRAWER
  onClose: PropTypes.func, // ON CLOSE FUNCTION MENU DRAWER
  children: PropTypes.any, //CHILDREN WOULD BE LIST OF MENU ITEMS
};

export default MenuDrawer;
