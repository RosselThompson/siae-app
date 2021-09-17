import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Box, useMediaQuery, useTheme } from '@material-ui/core';
import { Navbar } from './Navbar';
import { Menu } from './Menu';
import { Header } from 'components/Header';
import PropTypes from 'prop-types';
import { Menu as MenuData } from 'mock/mockData';

const Layout = (props) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const history = useHistory();
  const [menuOpened, setMenuOpened] = useState(false);

  const toogleMenu = () => setMenuOpened(!menuOpened);

  const checkActiveMenu = (path) => history.location.pathname === path;
  const onClickMenuItem = (to) => {
    setMenuOpened(!menuOpened);
    history.push(to);
  };
  const getTitle = () => {
    if (history.location.pathname !== '/')
      return MenuData.find((e) => e.to === history.location.pathname)
        ?.nombreModulo;
    return '';
  };

  return (
    <>
      <Navbar onClick={toogleMenu} />
      <Menu
        menuData={MenuData}
        opened={menuOpened}
        onClose={toogleMenu}
        checkActive={checkActiveMenu}
        onClickItem={onClickMenuItem}
      />
      <Box marginLeft="2rem" marginTop={isDesktop ? '3rem' : '2rem'}>
        <Header userName="Rossel Thompson" title={getTitle()} />
      </Box>
      <Box
        marginRight={isDesktop ? '3rem' : '2rem'}
        marginLeft={isDesktop ? '3rem' : '2rem'}
        marginTop={'2rem'}
      >
        {props.children}
      </Box>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.any, // Children property
};

export default Layout;
