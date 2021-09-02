import {
  Card as MaterialCard,
  CardContent as MaterialCardContent,
  Typography,
  Box,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  customCard: {
    boxShadow: '0px 10px 30px rgba(128, 141, 145, 0.2)',
    borderRadius: '4px',
    minHeight: '300px',
    minWidth: '263px',
  },
  filledCard: {
    boxShadow: '0px 10px 30px rgba(128, 141, 145, 0.2)',
    borderRadius: '4px',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    minHeight: '300px',
    minWidth: '263px',
  },
  filledCardNoMin: {
    boxShadow: '0px 10px 30px rgba(128, 141, 145, 0.2)',
    borderRadius: '4px',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
}));

const Card = (props) => {
  const { title, filled, noMin, children } = props;
  const classes = useStyles();
  const type = noMin
    ? classes.filledCardNoMin
    : filled
    ? classes.filledCard
    : classes.customCard;
  return (
    <Box margin="1rem">
      <MaterialCard className={type}>
        <MaterialCardContent>
          <Typography gutterBottom variant="h6">
            {title}
          </Typography>
          <Box marginTop="1rem">{children}</Box>
        </MaterialCardContent>
      </MaterialCard>
    </Box>
  );
};

Card.propTypes = {
  title: PropTypes.string, // TITLE OF THE CARD
  filled: PropTypes.bool, // SHOW CARD FILLED
  noMin: PropTypes.bool, // NO MINIMUN SIZE
  children: PropTypes.any, //CARD CONTAINED
};

export default Card;
