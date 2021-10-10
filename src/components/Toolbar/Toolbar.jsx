import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { Add, Edit, Delete } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { FabButton } from 'components/FabButton';
import PropTypes from 'prop-types';

const useStyles = makeStyles(() => ({
  button: {
    borderRadius: '8px',
    marginLeft: '0.5rem',
    marginRight: '0.5rem',
  },
}));

const Toolbar = (props) => {
  const { onClickAdd, onClickEdit, onClickDelete, isSelected } = props;
  const classes = useStyles();
  const { t } = useTranslation();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
    noSsr: true,
  });

  return (
    <>
      {!isDesktop ? (
        <FabButton
          onClickAdd={onClickAdd}
          onClickEdit={onClickEdit}
          onClickDelete={onClickDelete}
          isSelected={isSelected}
        />
      ) : (
        <Box display="flex" justifyContent="flex-end">
          <Button
            className={classes.button}
            startIcon={<Add />}
            variant="contained"
            color="primary"
            onClick={onClickAdd}
          >
            <Typography variant="caption">{t('toolbar.add')}</Typography>
          </Button>
          <Button
            className={classes.button}
            startIcon={<Edit />}
            onClick={onClickEdit}
            disabled={!isSelected}
          >
            <Typography variant="caption">{t('toolbar.edit')}</Typography>
          </Button>
          <Button
            className={classes.button}
            startIcon={<Delete />}
            onClick={onClickDelete}
            disabled={!isSelected}
          >
            <Typography variant="caption">{t('toolbar.delete')}</Typography>
          </Button>
        </Box>
      )}
    </>
  );
};

Toolbar.propTypes = {
  onClickAdd: PropTypes.func, // ONCLICK FUNCTION TO ADD BUTTON
  onClickEdit: PropTypes.func, // ONCLICK FUNCTION TO EDIT BUTTON
  onClickDelete: PropTypes.func, // ONCLICK FUNCTION TO DELETE BUTTON
  isSelected: PropTypes.bool, // IS SELECTED ROW
};

export default Toolbar;
