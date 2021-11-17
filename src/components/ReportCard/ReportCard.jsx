import { useTranslation } from 'react-i18next';
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  makeStyles,
} from '@material-ui/core';
import { CloudDownload } from '@material-ui/icons';
import PropTypes from 'prop-types';

const useStyles = makeStyles(() => ({
  card: {
    boxShadow: '0px 10px 30px rgba(128, 141, 145, 0.2)',
    borderRadius: '4px',
    height: '500px',
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column',
  },
  media: {
    height: '200px',
    backgroundSize: 'contain',
    marginBottom: '2rem',
    marginInline: '1rem',
  },
  buttonText: {
    marginLeft: '0.5rem',
    textTransform: 'none',
  },
  buttonContainer: {
    marginBottom: '0.5rem',
  },
}));

const ReportCard = (props) => {
  const { image, title, body, onClick } = props;
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <Box margin="1rem">
      <Card className={classes.card}>
        <CardMedia className={classes.media} image={image} title={title} />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {title}
          </Typography>
          <Typography variant="caption">{body}</Typography>
        </CardContent>
        <CardActions className={classes.buttonContainer}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={onClick}
          >
            <CloudDownload />
            <Typography className={classes.buttonText} variant="caption">
              {t('reportCard.button.text')}
            </Typography>
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

ReportCard.propTypes = {
  image: PropTypes.string, // IMAGE URL
  title: PropTypes.string, // CARD TITLE
  body: PropTypes.string, // CARD BODY CONTENT
  onClick: PropTypes.func, // BUTTON ON CLICK FUNCTION
};

export default ReportCard;
