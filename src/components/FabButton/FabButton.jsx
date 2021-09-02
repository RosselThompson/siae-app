import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@material-ui/lab';
import { Add, Delete, Edit } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  speedDial: {
    position: 'fixed',
    '&.MuiSpeedDial-directionUp': {
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
  },
}));

const FabButton = (props) => {
  const { onClickAdd, onClickEdit, onClickDelete, isSelected } = props;
  const [opened, setopened] = useState(false);
  const { t } = useTranslation();
  const classes = useStyles();

  const handleClose = () => setopened(false);
  const handleOpen = () => setopened(true);

  return (
    <SpeedDial
      ariaLabel="SpeedDial Toolbar"
      className={classes.speedDial}
      icon={<SpeedDialIcon />}
      onClose={handleClose}
      onOpen={handleOpen}
      open={opened}
      direction="up"
    >
      <SpeedDialAction
        icon={<Add />}
        tooltipTitle={t('toolbar.add')}
        onClick={onClickAdd}
      />
      <SpeedDialAction
        icon={<Edit />}
        tooltipTitle={t('toolbar.edit')}
        onClick={onClickEdit}
        disabled={!isSelected}
      />
      <SpeedDialAction
        icon={<Delete />}
        tooltipTitle={t('toolbar.delete')}
        onClick={onClickDelete}
        disabled={!isSelected}
      />
    </SpeedDial>
  );
};

FabButton.propTypes = {
  onClickAdd: PropTypes.func, // ONCLICK FUNCTION TO ADD BUTTON
  onClickEdit: PropTypes.func, // ONCLICK FUNCTION TO EDIT BUTTON
  onClickDelete: PropTypes.func, // ONCLICK FUNCTION TO DELETE BUTTON
  isSelected: PropTypes.bool, //IS SELECTED ROW
};

export default FabButton;
