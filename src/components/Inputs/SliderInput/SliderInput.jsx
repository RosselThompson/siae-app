import { useField } from 'formik';
import { Typography, Box, Slider } from '@material-ui/core';
import PropTypes from 'prop-types';

const SliderInput = (props) => {
  const { name, title, marks, step = 1, min = 1, max = 5, sliderStyle } = props;
  const [field, meta, helper] = useField(name);
  return (
    <Box marginBottom="1.5rem">
      <Box marginBottom="0.5rem">
        <Typography variant="caption"> {title}</Typography>
        <Box style={sliderStyle}>
          <Slider
            step={step}
            marks={marks}
            max={max}
            min={min}
            value={field.value}
            onChange={(_, val) => helper.setValue(val)}
            error={meta.touched && Boolean(meta.error)}
            helperText={meta.touched && meta.error}
          />
        </Box>
      </Box>
    </Box>
  );
};

SliderInput.propTypes = {
  name: PropTypes.string, // FIELD NAME
  title: PropTypes.string, // INPUT TITLE
  marks: PropTypes.array, // SLIDER MARKS
  step: PropTypes.number, //SLIDER STEP
  max: PropTypes.number, //SLIDER MAX
  min: PropTypes.number, // SLIDER MIN
  sliderStyle: PropTypes.object, //SET SLIDER STYLE
};

export default SliderInput;
