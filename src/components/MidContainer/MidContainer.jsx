import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles(() => ({
  container: {
    width: '100vw',
    height: '100vh',
  },
  imageContainer: {
    backgroundSize: 'cover',
    width: '100%',
    height: '100%',
  },
}));

const MidContainer = (props) => {
  const { children } = props;
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item md={6} sm={0} xs={0}>
        <div
          className={classes.imageContainer}
          style={{ backgroundImage: `url(static/icons/background-ved.jpg)` }}
        />
      </Grid>
      <Grid item md={6} sm={12} xs={12}>
        <Box marginX="2rem" marginBottom="2rem">
          {children}
        </Box>
      </Grid>
    </Grid>
  );
};

MidContainer.propTypes = {
  children: PropTypes.any, //CARD CONTAINED
};

export default MidContainer;
