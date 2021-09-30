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

  const allItems = () => {
    if (typeof fieldValue === 'function') {
      return data?.map((e, i) => (
        <MenuItem key={`customSelectInput${i}`} value={e}>
          <Typography variant="caption">{fieldValue(e)}</Typography>
        </MenuItem>
      ));
    } else {
      return data?.map((e) => (
        <MenuItem key={fieldValue ? e[fieldValue] : e} value={e}>
          <Typography variant="caption">
            {fieldValue ? e[fieldValue] : e}
          </Typography>
        </MenuItem>
      ));
    }
  };

  const groupList = () => {
    const newData = data.map((e, i) => {
      const prev = data[i - 1] || {};
      return e[groupBy] !== prev[groupBy] ? { section: e[groupBy] } : e;
    });
    return newData.map((e) =>
      e[fieldValue] ? (
        <MenuItem key={e[fieldValue]} value={e}>
          <Typography variant="caption">{e[fieldValue]}</Typography>
        </MenuItem>
      ) : (
        <ListSubheader className={classes.header} key={e?.section}>
          {e?.section}
        </ListSubheader>
      )
    );
  };
  const renderItems = () => (groupBy ? groupList() : allItems());
  const renderValue = (val) => {
    if (typeof fieldValue === 'function') {
      return fieldValue(val);
    } else {
      return fieldValue ? val[fieldValue] : val;
    }
  };

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
        <Select {...field} fullWidth renderValue={renderValue}>
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
  fieldValue: PropTypes.oneOfType([PropTypes.string, PropTypes.func]), //SHOW FIELD ON SELECTED
  groupBy: PropTypes.string, //ITEMS GROUP
};

export default SelectInput;
