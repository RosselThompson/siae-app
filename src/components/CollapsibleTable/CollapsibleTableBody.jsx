import { useState } from 'react';
import {
  Box,
  IconButton,
  Collapse,
  TableContainer as MaterialTableContainer,
  Table as MaterialTable,
  TableBody as MaterialTableBody,
  TableRow as MaterialTableRow,
  TableCell as MaterialTableCell,
  Typography,
} from '@material-ui/core';
import { KeyboardArrowDown, KeyboardArrowUp } from '@material-ui/icons';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  rowBody: {
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.palette.grey[100],
    },
  },
  rowBodyActive: {
    backgroundColor: theme.palette.grey[300],
  },
  rowCellCollapse: {
    paddingBottom: 0,
    paddingTop: 0,
    border: 0,
  },
}));

const CollapsibleTableBody = (props) => {
  const {
    row,
    index,
    fieldChild,
    textChild,
    columns,
    setSelectedRow,
    selectedRowIndex,
    setselectedRowIndex,
    data,
  } = props;
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <>
      <MaterialTableRow
        className={
          index === selectedRowIndex ? classes.rowBodyActive : classes.rowBody
        }
        onClick={() => {
          setselectedRowIndex(index);
          setSelectedRow(data[index]);
        }}
      >
        <MaterialTableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </MaterialTableCell>
        {columns.map((e) => (
          <MaterialTableCell
            key={row[e.field]}
            component="th"
            scope="row"
            width="100%"
          >
            {row[e.field]}
          </MaterialTableCell>
        ))}
      </MaterialTableRow>
      <MaterialTableRow>
        <MaterialTableCell className={classes.rowCellCollapse} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            {row[fieldChild].map((e) => (
              <Box key={e[textChild]}>
                <MaterialTableContainer>
                  <MaterialTable>
                    <MaterialTableBody>
                      <MaterialTableRow>
                        <MaterialTableCell width="100%">
                          <Typography variant="caption">
                            {e[textChild]}
                          </Typography>
                        </MaterialTableCell>
                      </MaterialTableRow>
                    </MaterialTableBody>
                  </MaterialTable>
                </MaterialTableContainer>
              </Box>
            ))}
          </Collapse>
        </MaterialTableCell>
      </MaterialTableRow>
    </>
  );
};

CollapsibleTableBody.propTypes = {
  data: PropTypes.array, //DATA
  row: PropTypes.object, //ROW DATA
  index: PropTypes.number, //INDEX ROW DATA
  fieldChild: PropTypes.string, //FIELD TO SHOW ON CHILD
  textChild: PropTypes.string, //TEXT TO SHOW ON COLLAPSE
  columns: PropTypes.array, //COLUMN NAMES
  selectedRowIndex: PropTypes.number, // INDEX ROW SELECTED
  setselectedRowIndex: PropTypes.func, // FUNCTION TO SET SELECTED INDEX ROW
  setSelectedRow: PropTypes.func, // FUNCTION TO SET SELECTED ROW
};

export default CollapsibleTableBody;
