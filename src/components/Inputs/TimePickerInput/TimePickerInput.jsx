import { useTranslation } from 'react-i18next';
import 'date-fns';
import {
  KeyboardTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import { Box, Typography } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { useField } from 'formik';
import PropTypes from 'prop-types';

const TimePickerInput = (props) => {
  const { name, title } = props;
  const { t } = useTranslation();
  const [field, meta, helpers] = useField(name);
  return (
    <Box marginBottom="1.5rem">
      <Box marginBottom="0.5rem">
        <Typography variant="caption"> {title}</Typography>
      </Box>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardTimePicker
          ampm={false}
          size="small"
          inputVariant="outlined"
          margin="normal"
          cancelLabel={t('timePicker.cancel')}
          okLabel={t('timePicker.ok')}
          placeholder="HH:mm"
          fullWidth
          onChange={(e) => helpers.setValue(e)}
          value={field.value}
          error={meta.touched && Boolean(meta.error)}
          helperText={meta.touched && meta.error}
        />
      </MuiPickersUtilsProvider>
    </Box>
  );
};

TimePickerInput.propTypes = {
  name: PropTypes.string, // FIELD NAME
  title: PropTypes.string, // INPUT TITLE
};

export default TimePickerInput;
