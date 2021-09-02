import { Box, Divider } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { MenuDrawer } from 'components/MenuDrawer';
import { MenuItem } from 'components/MenuItem';
import PropTypes from 'prop-types';

const Menu = (props) => {
  const { menuData, opened, onClose, checkActive, onClickItem } = props;
  const { t } = useTranslation();

  return (
    <MenuDrawer opened={opened} onClose={onClose}>
      <Box marginTop="1rem" padding="1rem">
        {menuData
          .sort((a, b) => a.orden > b.orden)
          .map((e) => (
            <MenuItem
              key={e.idModulo}
              iconName={e.icon}
              value={t(e.nombreModulo)}
              active={checkActive(e.to)}
              onClick={() => onClickItem(e.to)}
            />
          ))}
        <Box marginY="1rem">
          <Divider />
        </Box>
        <MenuItem iconName="lockOpen" value="Cerrar Sesión" />
      </Box>
    </MenuDrawer>
  );
};

Menu.propTypes = {
  opened: PropTypes.bool, //OPEN MENU DRAWER
  onClose: PropTypes.func, // ON CLOSE FUNCTION MENU DRAWER
  menuData: PropTypes.array, // LOAD MENU ITEMS
  checkActive: PropTypes.func, //FUNCTION TO CHECK IF THE MENU IS ACTIVETED
  onClickItem: PropTypes.func, //ONCLICK FUNCTION MENU ITEM
};

export default Menu;
