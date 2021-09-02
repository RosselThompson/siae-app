import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Box,
  TableContainer as MaterialTableContainer,
  Table as MaterialTable,
  TableHead as MaterialTableHead,
  TableBody as MaterialTableBody,
  TableRow as MaterialTableRow,
  TableCell as MaterialTableCell,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CollapsibleTableBody from './CollapsibleTableBody';
import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  rowColumn: {
    fontSize: '0.75rem',
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    color: theme.palette.grey[700],
  },
}));

const CollapsibleTable = (props) => {
  const { data, fieldChild, columns, textChild, setSelectedRow } = props;
  const classes = useStyles();
  const { t } = useTranslation();
  const [selectedRowIndex, setselectedRowIndex] = useState(null);

  return (
    <Box marginBottom="2rem" marginTop="1rem">
      <MaterialTableContainer>
        <MaterialTable>
          <MaterialTableHead className={classes.rowHeader}>
            <MaterialTableRow>
              {columns.map((e) => (
                <MaterialTableCell key={e.field} align="left" colSpan={6}>
                  <span className={classes.rowColumn}>{t(e.title)}</span>
                </MaterialTableCell>
              ))}
            </MaterialTableRow>
          </MaterialTableHead>
          <MaterialTableBody>
            {data.map((row, index) => (
              <React.Fragment key={index}>
                <CollapsibleTableBody
                  data={data}
                  row={row}
                  index={index}
                  fieldChild={fieldChild}
                  textChild={textChild}
                  columns={columns}
                  selectedRowIndex={selectedRowIndex}
                  setselectedRowIndex={setselectedRowIndex}
                  setSelectedRow={setSelectedRow}
                />
              </React.Fragment>
            ))}
          </MaterialTableBody>
        </MaterialTable>
      </MaterialTableContainer>
    </Box>
  );
};

CollapsibleTable.propTypes = {
  data: PropTypes.array, // DATA TO SHOW IN GRID
  fieldChild: PropTypes.string, //FIELD TO SHOW ON CHILD
  textChild: PropTypes.string, //TEXT TO SHOW ON COLLAPSE
  columns: PropTypes.array, //COLUMN NAMES
  setSelectedRow: PropTypes.func, // FUNCTION TO SET SELECTED ROW
};

export default CollapsibleTable;
