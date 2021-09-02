import {
  Box,
  Table as MaterialTable,
  TableBody as MaterialTableBody,
  TableCell as MaterialTableCell,
  TableHead as MaterialTableHead,
  TableRow as MaterialTableRow,
  TableContainer as MaterialTableContainer,
  Typography,
  Checkbox,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { useField } from 'formik';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  rowColumn: {
    fontSize: '0.75rem',
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    color: theme.palette.grey[700],
  },
}));

const columns = [
  'permissionsField.module',
  'permissionsField.view',
  'permissionsField.add',
  'permissionsField.edit',
  'permissionsField.delete',
];

const PermissionsField = (props) => {
  const { modules = [], name } = props;
  const { t } = useTranslation();
  const [field] = useField(name);
  const classes = useStyles();

  const handleChange = (e, module, type) => {
    const newItem = {
      idModulo: module.idModulo,
      mostrar: type === 'mostrar',
      guardar: type === 'guardar',
      editar: type === 'editar',
      eliminar: type === 'eliminar',
    };
    if (field.value.find((p) => p.idModulo === module.idModulo) !== undefined) {
      //EDIT PERMISSIONS
      const data = [...field.value];
      data.find((e) => e.idModulo === module.idModulo)[type] = e.target.checked;
      field.onChange({ target: { value: data, id: name, name } });
    } else {
      //ADD TO PERMISSIONS ARRAY
      field.onChange({
        target: { value: [...field.value, newItem], id: name, name },
      });
    }
  };
  return (
    <>
      <Box marginBottom="0.5rem">
        <Typography variant="caption">{t('permissionsField.title')}</Typography>
      </Box>
      <MaterialTableContainer>
        <MaterialTable>
          <MaterialTableHead>
            <MaterialTableRow>
              {columns.map((e) => (
                <MaterialTableCell key={e} align="left">
                  <span className={classes.rowColumn}>{t(e)}</span>
                </MaterialTableCell>
              ))}
            </MaterialTableRow>
          </MaterialTableHead>
          <MaterialTableBody>
            {modules.map((m) => (
              <MaterialTableRow key={m.idModulo}>
                <MaterialTableCell align="left">
                  <Typography variant="caption">{t(m.nombreModulo)}</Typography>
                </MaterialTableCell>
                <MaterialTableCell align="center">
                  <Checkbox
                    defaultChecked={
                      field.value.find((p) => p.idModulo === m.idModulo)
                        ?.mostrar
                    }
                    onChange={(e) => handleChange(e, m, 'mostrar')}
                    color="primary"
                  />
                </MaterialTableCell>
                <MaterialTableCell align="center">
                  <Checkbox
                    defaultChecked={
                      field.value.find((p) => p.idModulo === m.idModulo)
                        ?.guardar
                    }
                    onChange={(e) => handleChange(e, m, 'guardar')}
                    color="primary"
                  />
                </MaterialTableCell>
                <MaterialTableCell align="center">
                  <Checkbox
                    defaultChecked={
                      field.value.find((p) => p.idModulo === m.idModulo)?.editar
                    }
                    onChange={(e) => handleChange(e, m, 'editar')}
                    color="primary"
                  />
                </MaterialTableCell>
                <MaterialTableCell align="center">
                  <Checkbox
                    defaultChecked={
                      field.value.find((p) => p.idModulo === m.idModulo)
                        ?.eliminar
                    }
                    onChange={(e) => handleChange(e, m, 'eliminar')}
                    color="primary"
                  />
                </MaterialTableCell>
              </MaterialTableRow>
            ))}
          </MaterialTableBody>
        </MaterialTable>
      </MaterialTableContainer>
    </>
  );
};

PermissionsField.propTypes = {
  modules: PropTypes.array, // LIST OF MODULES
  name: PropTypes.string, //FIELD NAME
};

export default PermissionsField;
