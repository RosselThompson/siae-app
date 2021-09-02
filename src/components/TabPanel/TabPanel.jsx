import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';

const TabPanel = (props) => {
  const { children, value, index } = props;

  return (
    <Box
      marginY="1rem"
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
    >
      {value === index && children}
    </Box>
  );
};

export default TabPanel;

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
