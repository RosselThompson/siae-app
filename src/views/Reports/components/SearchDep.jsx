import { useTranslation } from 'react-i18next';
import { Form, Formik } from 'formik';
import { Modal } from 'components/Modal';
import { FormButton } from 'components/FormButton';
import { SelectInput } from 'components/Inputs/SelectInput';
import { searchDepSchema } from 'helpers/schemas';
import PropTypes from 'prop-types';

const SearchDep = (props) => {
  const { opened, title, onClose, onSubmit, departmentsData } = props;
  const { t } = useTranslation();
  return (
    <Modal opened={opened} onClose={onClose} title={title}>
      <Formik
        initialValues={{ department: '' }}
        onSubmit={onSubmit}
        validationSchema={searchDepSchema()}
        validateOnChange={false}
        validateOnBlur={false}
      >
        <Form>
          <SelectInput
            data={departmentsData}
            name="department"
            title={t('reports.searchDep.input.department')}
            fieldValue="nombre"
          />
          <FormButton
            text={t('button.confirm')}
            loadingText={t('button.isLoading')}
            type="submit"
          />
        </Form>
      </Formik>
    </Modal>
  );
};

SearchDep.propTypes = {
  opened: PropTypes.bool, //OPENED MODAL
  onClose: PropTypes.func, //FUNCTION TO CLOSE MODAL
  title: PropTypes.string, //FORM TITLE
  onSubmit: PropTypes.func, // SUBMIT FUNCTION
  departmentsData: PropTypes.array, //DEPARTMENTS TO FILL SELECT INPUT
};

export default SearchDep;
