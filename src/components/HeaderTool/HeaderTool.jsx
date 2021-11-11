import { useTranslation } from 'react-i18next';
import {
  Box,
  Grid,
  Divider,
  Typography,
  Avatar,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  avatarPrimary: {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
  },
}));

const HeaderTool = (props) => {
  const { type } = props;
  const classes = useStyles();
  const { t } = useTranslation();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
    noSsr: true,
  });

  return (
    <>
      <Box textAlign="center">
        <Typography variant="h6">{t(`headerTool.title.${type}`)}</Typography>
      </Box>
      <Box display="flex" marginTop="1.5rem" justifyContent="center">
        <Avatar className={classes.avatarPrimary}>R</Avatar>
      </Box>
      <Box paddingX={isDesktop ? '2rem' : '0'} paddingTop="2rem">
        <Grid container spacing={2}>
          <Grid item md={6} sm={12} xs={12}>
            <Grid container spacing={2}>
              <Grid item md={12} sm={12} xs={12}>
                <Grid container>
                  <Grid item md={4} sm={4} xs={4}>
                    <Typography>Fecha: </Typography>
                  </Grid>
                  <Grid item md={8} sm={8} xs={8}>
                    <Typography>21/10/2021</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item md={12} sm={12} xs={12}>
                <Grid container>
                  <Grid item md={4} sm={4} xs={4}>
                    <Typography>Nombre: </Typography>
                  </Grid>
                  <Grid item md={8} sm={8} xs={8}>
                    <Typography>Rossel Thompson </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item md={12} sm={12} xs={12}>
                <Grid container>
                  <Grid item md={4} sm={4} xs={4}>
                    <Typography>Sexo: </Typography>
                  </Grid>
                  <Grid item md={8} sm={8} xs={8}>
                    <Typography>M </Typography>
                  </Grid>
                </Grid>
              </Grid>
              {type === 'AAC' ? (
                <Grid item md={12} sm={12} xs={12}>
                  <Grid container>
                    <Grid item md={4} sm={4} xs={4}>
                      <Typography>Docentes Invitados: </Typography>
                    </Grid>
                    <Grid item md={8} sm={8} xs={8}>
                      <Typography>
                        Danilo Humberto Noguera Rivera, Walger José Herrera
                        Treminio
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              ) : null}
            </Grid>
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <Grid container spacing={2}>
              <Grid item md={12} sm={12} xs={12}>
                <Grid container>
                  <Grid item md={4} sm={4} xs={4}>
                    <Typography>Recinto: </Typography>
                  </Grid>
                  <Grid item md={8} sm={8} xs={8}>
                    <Typography>Recinto Pedro Arauz Palacios</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item md={12} sm={12} xs={12}>
                <Grid container>
                  <Grid item md={4} sm={4} xs={4}>
                    <Typography>Facultad: </Typography>
                  </Grid>
                  <Grid item md={8} sm={8} xs={8}>
                    <Typography>Facultad de Ciencias y Sistemas </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item md={12} sm={12} xs={12}>
                <Grid container>
                  <Grid item md={4} sm={4} xs={4}>
                    <Typography>Carrera: </Typography>
                  </Grid>
                  <Grid item md={8} sm={8} xs={8}>
                    <Typography>Ingeniería de Sistemas </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box paddingX={isDesktop ? '3rem' : '0'} paddingTop="3rem">
        <Divider />
      </Box>
    </>
  );
};

HeaderTool.propTypes = {
  type: PropTypes.oneOf(['AVD', 'VED', 'AAC']), //TOOL TITLE
};

export default HeaderTool;
