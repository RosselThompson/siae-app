import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Tabs, Tab } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  tabTitle: {
    textTransform: 'none',
  },
}));

const TabsContainer = (props) => {
  const { value, onChange, tabs } = props;
  const classes = useStyles();
  return (
    <Tabs value={value} onChange={onChange} indicatorColor="primary">
      {tabs.map((title) => (
        <Tab key={title} className={classes.tabTitle} label={title} />
      ))}
    </Tabs>
  );
};

export default TabsContainer;

TabsContainer.propTypes = {
  value: PropTypes.number, // CURRENT TAB
  onChange: PropTypes.func, // ON CHANGE FUNCTION
  tabs: PropTypes.array, // ARRAY OF TAB TITLES
};
