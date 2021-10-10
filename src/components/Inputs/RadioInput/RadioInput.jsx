import { useField } from 'formik';
import {
  Typography,
  Box,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Radio,
} from '@material-ui/core';
import PropTypes from 'prop-types';

const RadioInput = (props) => {
  const { name, title, options = [] } = props;
  const [field, meta] = useField(name);

  return (
    <Box marginBottom="1.5rem">
      <Box marginBottom="0.5rem">
        <Box marginBottom="0.5rem">
          <Typography variant="caption"> {title}</Typography>
        </Box>
        <FormControl error={meta.touched && Boolean(meta.error)}>
          <RadioGroup {...field}>
            {options.map((e) => (
              <FormControlLabel
                key={`${name}_${e?.value}`}
                value={e?.value}
                control={<Radio color="primary" />}
                label={<Typography variant="caption">{e?.label}</Typography>}
                checked={field.value == e?.value}
              />
            ))}
          </RadioGroup>
          <FormHelperText>{meta.touched && meta.error}</FormHelperText>
        </FormControl>
      </Box>
    </Box>
  );
};

RadioInput.propTypes = {
  name: PropTypes.string, // FIELD NAME
  title: PropTypes.string, // INPUT TITLE
  options: PropTypes.array, //RADIO OPTIONS
};

export default RadioInput;
