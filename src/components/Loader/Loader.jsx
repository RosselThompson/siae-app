import { ErrorSnackbar } from 'components/ErrorSnackbar';
import { Skeleton } from '@material-ui/lab';
import PropTypes from 'prop-types';

const Loader = (props) => {
  const { error } = props;
  return (
    <>
      <Skeleton variant="text" height="4rem" />
      <Skeleton variant="rect" height="37rem" />
      {error && <ErrorSnackbar error={error} />}
    </>
  );
};

Loader.propTypes = {
  error: PropTypes.object, // ERROR OBJECT
};

export default Loader;
