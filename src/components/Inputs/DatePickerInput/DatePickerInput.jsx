import { useTranslation } from 'react-i18next';
import 'date-fns';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import { Box, Typography } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import esLocale from 'date-fns/locale/es';
import { useField } from 'formik';
import PropTypes from 'prop-types';

const DatePickerInput = (props) => {
  const { name, title } = props;
  const { t } = useTranslation();
  const [field, meta, helpers] = useField(name);
  return (
    <Box marginBottom="1.5rem">
      <Box marginBottom="0.5rem">
        <Typography variant="caption"> {title}</Typography>
      </Box>
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
        <KeyboardDatePicker
          disableToolbar
          inputVariant="outlined"
          format="dd/MM/yyyy"
          margin="normal"
          placeholder="DD/MM/YYYY"
          cancelLabel={t('datePicker.cancel')}
          okLabel={t('datePicker.ok')}
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

DatePickerInput.propTypes = {
  name: PropTypes.string, // FIELD NAME
  title: PropTypes.string, // INPUT TITLE
};

export default DatePickerInput;
