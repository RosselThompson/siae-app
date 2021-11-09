import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useLoadApplyAVD } from 'hooks/useLoadApplyAVD';
import { LoadTool } from 'components/LoadTool';
import { Loader } from 'components/Loader';
import { Box } from '@material-ui/core';
import BackIcon from 'components/BackIcon/BackIcon';

const ApplyAVD = () => {
  const [data, loading, error] = useLoadApplyAVD();
  const [loadingButton, setloadingButton] = useState(false);
  const history = useHistory();

  const submitForm = () => {
    setloadingButton(true);
    setTimeout(() => {
      history.push('/');
    }, 2000);
  };

  const backFn = () => history.push('/');

  if (loading)
    return (
      <Box paddingX="2rem" paddingTop="3rem">
        <Loader error={error} />
      </Box>
    );

  return (
    <Box margin="0.5rem">
      <BackIcon onClick={backFn} />
      <Box paddingX="2rem">
        <LoadTool
          toolData={data}
          onSubmit={submitForm}
          isLoading={loadingButton}
          type="AVD"
        />
      </Box>
    </Box>
  );
};

export default ApplyAVD;
