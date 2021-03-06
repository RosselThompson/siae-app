import { useField } from 'formik';
import {
  Select,
  Typography,
  Box,
  MenuItem,
  Chip,
  FormControl,
  FormHelperText,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  chip: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    marginRight: '0.25rem',
  },
}));

const MultiSelectInput = (props) => {
  const { name, title, data = [], fieldValue } = props;
  const classes = useStyles();
  const [field, meta] = useField(name);

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
        <Select
          {...field}
          fullWidth
          multiple
          renderValue={(selected) => (
            <>
              {selected.map((value) => (
                <Chip
                  key={value[fieldValue]}
                  label={
                    typeof fieldValue === 'function'
                      ? fieldValue(value)
                      : value[fieldValue]
                  }
                  className={classes.chip}
                />
              ))}
            </>
          )}
        >
          {data.map((e, i) => {
            if (typeof fieldValue === 'function') {
              return (
                <MenuItem key={`customMultiSelect${i}`} value={e}>
                  <Typography variant="caption">{fieldValue(e)}</Typography>
                </MenuItem>
              );
            } else
              return (
                <MenuItem key={e[fieldValue]} value={e}>
                  <Typography variant="caption">{e[fieldValue]}</Typography>
                </MenuItem>
              );
          })}
        </Select>
        <FormHelperText>{meta.touched && meta.error}</FormHelperText>
      </FormControl>
    </Box>
  );
};

MultiSelectInput.propTypes = {
  name: PropTypes.string, // FIELD NAME
  title: PropTypes.string, // INPUT TITLE
  data: PropTypes.array, //DATA ARRAY
  fieldValue: PropTypes.oneOfType([PropTypes.string, PropTypes.func]), //SHOW FIELD ON SELECTED
};

export default MultiSelectInput;
