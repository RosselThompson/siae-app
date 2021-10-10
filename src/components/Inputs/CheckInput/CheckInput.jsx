import { useField } from 'formik';
import {
  Typography,
  Box,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormGroup,
  Checkbox,
} from '@material-ui/core';
import PropTypes from 'prop-types';

const CheckInput = (props) => {
  const { name, title, options = [] } = props;
  const [field, meta, helper] = useField(name);

  return (
    <Box marginBottom="1.5rem">
      <Box marginBottom="0.5rem">
        <Box marginBottom="0.5rem">
          <Typography variant="caption"> {title}</Typography>
        </Box>
        <FormControl error={meta.touched && Boolean(meta.error)}>
          <FormGroup>
            {options.map((e) => (
              <FormControlLabel
                key={e?.value}
                value={e?.value}
                label={<Typography variant="caption">{e?.label}</Typography>}
                control={<Checkbox color="primary" />}
                onChange={(_, val) =>
                  helper.setValue({
                    ...field.value,
                    [e.label]: val,
                  })
                }
              />
            ))}
          </FormGroup>
          <FormHelperText>{meta.touched && meta.error}</FormHelperText>
        </FormControl>
      </Box>
    </Box>
  );
};

CheckInput.propTypes = {
  name: PropTypes.string, // FIELD NAME
  title: PropTypes.string, // INPUT TITLE
  options: PropTypes.array, //RADIO OPTIONS
};

export default CheckInput;
