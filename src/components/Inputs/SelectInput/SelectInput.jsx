import {
  Select,
  Typography,
  Box,
  FormControl,
  FormHelperText,
  MenuItem,
  ListSubheader,
} from '@material-ui/core';
import { useField } from 'formik';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  header: {
    position: 'relative',
  },
}));

const SelectInput = (props) => {
  const { name, title, data = [], fieldValue, groupBy } = props;
  const [field, meta] = useField(name);
  const classes = useStyles();

  const allItems = () =>
    data?.map((e) => (
      <MenuItem key={e[fieldValue]} value={e}>
        {e[fieldValue]}
      </MenuItem>
    ));

  const testList = () => {
    const firstGroup = data.map((e, i) => {
      const prev = data[i - 1] || {};
      return e[groupBy]?.name !== prev[groupBy]?.name ? i : null;
    });
    const index = firstGroup.filter((e) => e !== null);
    const newData = [...data];
    index.forEach((e) => newData.splice(e, 0, {}));
    return newData?.map((e, i) => {
      const group = data[i + index.length - 1] || {};
      return e[fieldValue] ? (
        <MenuItem key={e[fieldValue]} value={e}>
          {e[fieldValue]}
        </MenuItem>
      ) : (
        <ListSubheader className={classes.header} key={i}>
          {group[groupBy]?.name}
        </ListSubheader>
      );
    });
  };
  const renderItems = () => (groupBy ? testList() : allItems());

  return (
    <Box marginBottom="1.5rem">
      <Box marginBottom="0.5rem">
        <Typography variant="caption"> {title}</Typography>
      </Box>
      <FormControl
        fullWidth
        variant="outlined"
        size="small"
        error={meta.touched && Boolean(meta.error)}
      >
        <Select {...field} fullWidth>
          {renderItems()}
        </Select>
        <FormHelperText>{meta.touched && meta.error}</FormHelperText>
      </FormControl>
    </Box>
  );
};

SelectInput.propTypes = {
  name: PropTypes.string, // FIELD NAME
  title: PropTypes.string, // INPUT TITLE
  data: PropTypes.array, //DATA ARRAY
  fieldValue: PropTypes.string, //SHOW FIELD ON SELECTED
  groupBy: PropTypes.string, //ITEMS GROUP
};

export default SelectInput;
