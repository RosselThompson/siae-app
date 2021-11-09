import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Typography, useMediaQuery, useTheme } from '@material-ui/core';
import { Formik, Form } from 'formik';
import { MidContainer } from 'components/MidContainer';
import { TextInput } from 'components/Inputs/TextInput';
import { ToolButton } from 'components/ToolButton';
import { verifyCodeVEDSchema } from 'helpers/schemas';
import PropTypes from 'prop-types';

const CodePage = (props) => {
  const { onSubmit } = props;
  const [isLoading, setisLoading] = useState(false);
  const { t } = useTranslation();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
    noSsr: true,
  });

  return (
    <MidContainer>
      <Box textAlign="center" marginTop="2rem">
        <Typography variant="h6">{t('applyVED.codePage.title')}</Typography>
      </Box>
      <Box textAlign="center">
        <img
          src={'static/icons/educational-ved.svg'}
          alt="bg-image"
          width="300px"
          height="400px"
        />
      </Box>
      <Box marginX={isDesktop ? '2rem' : '0'} textAlign="center">
        <Typography variant="caption">{t('applyVED.codePage.info')}</Typography>
        <Box marginTop="3rem" textAlign="left">
          <Formik
            initialValues={{ code: '' }}
            validationSchema={verifyCodeVEDSchema()}
            validateOnChange={false}
            validateOnBlur={false}
            onSubmit={() => {
              setisLoading(true);
              onSubmit();
            }}
          >
            <Form>
              <TextInput name="code" title={t('applyVED.codePage.form.code')} />
              <ToolButton
                text={t('button.verify')}
                loadingText={t('button.isLoading')}
                isLoading={isLoading}
                type="submit"
              />
            </Form>
          </Formik>
        </Box>
      </Box>
    </MidContainer>
  );
};

CodePage.propTypes = {
  onSubmit: PropTypes.func, //ON SUBMIT FUNCTION
};

export default CodePage;
