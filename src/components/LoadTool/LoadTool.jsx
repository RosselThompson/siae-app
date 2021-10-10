import { useTranslation } from 'react-i18next';
import {
  Paper,
  Box,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import { CheckInput } from 'components/Inputs/CheckInput';
import { RadioInput } from 'components/Inputs/RadioInput';
import { SliderInput } from 'components/Inputs/SliderInput';
import { TextInput } from 'components/Inputs/TextInput';
import { ToolButton } from 'components/ToolButton';
import { YES_NO, SLIDER_MARKS } from 'constants/types';
import { Form, Formik } from 'formik';
import { getCheckOptions } from 'helpers/getCheckOptions';
import PropTypes from 'prop-types';

export const LoadTool = (props) => {
  const { onSubmit, toolData, isLoading } = props;
  const { t } = useTranslation();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
    noSsr: true,
  });
  return (
    <Box marginBottom="4rem" marginTop="1rem" width="100%">
      <Paper elevation={isDesktop && 2}>
        <Box paddingX={!isDesktop ? '0rem' : '2rem'} paddingY="0.5rem">
          <Formik initialValues={{}} onSubmit={onSubmit}>
            <Form>
              {toolData.map((t) => (
                <>
                  <Box marginY="2rem">
                    <Typography variant="h6"> {t?.nombre} </Typography>
                  </Box>
                  {t?.criterios.map((e) => {
                    if (e?.tipoValor === 0) {
                      return (
                        <RadioInput
                          title={e?.nombre}
                          name={e?.nombre}
                          options={YES_NO}
                        />
                      );
                    }
                    if (e?.tipoValor === 1) {
                      return (
                        <SliderInput
                          title={e?.nombre}
                          name={e?.nombre}
                          marks={SLIDER_MARKS}
                          sliderStyle={{
                            maxWidth: '18.75rem',
                            marginTop: '1rem',
                            marginLeft: '0.5rem',
                          }}
                        />
                      );
                    }
                    if (e?.tipoValor === 2) {
                      return (
                        <TextInput
                          title={e?.nombre}
                          name={e?.nombre}
                          inputStyle={{
                            maxWidth: '18.75rem',
                            marginTop: '1rem',
                          }}
                        />
                      );
                    }
                    if (e?.tipoValor === 3) {
                      return (
                        <CheckInput
                          title={e?.nombre}
                          name={e?.nombre}
                          options={getCheckOptions(e?.opciones)}
                        />
                      );
                    }
                    return null;
                  })}
                </>
              ))}
              <ToolButton
                text={t('button.save')}
                loadingText={t('button.isLoading')}
                isLoading={isLoading}
                type="submit"
              />
            </Form>
          </Formik>
        </Box>
      </Paper>
    </Box>
  );
};

LoadTool.propTypes = {
  toolData: PropTypes.array, //TOOL DATA WITH CRITERIAS
  onSubmit: PropTypes.func, //ON SUBMIT FUNCTION
  isLoading: PropTypes.bool, //BUTTON IS LOADING PROP
};

export default LoadTool;
