import { useTranslation } from 'react-i18next';
import { Form, Formik } from 'formik';
import { FormButton } from 'components/FormButton';
import { SelectInput } from 'components/Inputs/SelectInput';
import { Modal } from 'components/Modal';
import { searchFacultySchema } from 'helpers/schemas';
import PropTypes from 'prop-types';

const SearchFaculty = (props) => {
  const { opened, title, onClose, onSubmit, facultiesData } = props;
  const { t } = useTranslation();
  return (
    <Modal opened={opened} onClose={onClose} title={title}>
      <Formik
        initialValues={{ faculty: '' }}
        onSubmit={onSubmit}
        validationSchema={searchFacultySchema()}
        validateOnChange={false}
        validateOnBlur={false}
      >
        <Form>
          <SelectInput
            data={facultiesData}
            name="faculty"
            title={t('reports.searchFaculty.input.faculty')}
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

SearchFaculty.propTypes = {
  opened: PropTypes.bool, //OPENED MODAL
  onClose: PropTypes.func, //FUNCTION TO CLOSE MODAL
  title: PropTypes.string, //FORM TITLE
  onSubmit: PropTypes.func, // SUBMIT FUNCTION
  facultiesData: PropTypes.array, //FACULTIES TO FILL SELECT INPUT
};

export default SearchFaculty;
