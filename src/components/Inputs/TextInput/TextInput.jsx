import { useField } from 'formik';
import { TextField, Typography, Box } from '@material-ui/core';
import PropTypes from 'prop-types';

const TextInput = (props) => {
  const { name, title, type = 'text', inputStyle } = props;
  const [field, meta] = useField(name);
  return (
    <Box marginBottom="1.5rem">
      <Box marginBottom="0.5rem">
        <Typography variant="caption"> {title}</Typography>
      </Box>
      <Box style={inputStyle}>
        <TextField
          {...field}
          fullWidth
          type={type}
          size="small"
          variant="outlined"
          error={meta.touched && Boolean(meta.error)}
          helperText={meta.touched && meta.error}
        />
      </Box>
    </Box>
  );
};

TextInput.propTypes = {
  name: PropTypes.string, // FIELD NAME
  title: PropTypes.string, // INPUT TITLE
  type: PropTypes.string, // INPUT TYPE
  inputStyle: PropTypes.object, //INPUT STYLE
};

export default TextInput;
