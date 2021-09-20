import { Box, Chip } from '@material-ui/core';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  chips: {
    width: '100%',
    borderRadius: '5px',
    padding: '20px 5px',
    justifyContent: 'space-between',
  },
}));

const TagList = (props) => {
  const { dataList, fieldValue, onChange } = props;
  const classes = useStyles();

  return (
    <Box marginY="1rem">
      {dataList.map((e) => (
        <Box marginY="0.5rem" key={e[fieldValue]}>
          <Chip
            className={classes.chips}
            label={e[fieldValue]}
            onDelete={() => onChange(e)}
          />
        </Box>
      ))}
    </Box>
  );
};

TagList.propTypes = {
  dataList: PropTypes.array, // DATA
  fieldValue: PropTypes.string, // FIELD TO SHOWN
  onChange: PropTypes.func, // CHANGE DATA FUNCTION
};

export default TagList;
