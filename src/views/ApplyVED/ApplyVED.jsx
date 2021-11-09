import { useState } from 'react';
import CodePage from './components/CodePage';
import Completed from './components/Completed';
import Tool from './components/Tool';

const ApplyVED = () => {
  const [step, setstep] = useState(0);

  const verifyCode = () => {
    setTimeout(() => {
      setstep(1);
    }, 2000);
  };

  const cancelDialog = () => {
    setTimeout(() => {
      setstep(0);
    }, 2000);
  };

  const saveDialog = () => {
    setTimeout(() => {
      setstep(2);
    }, 2000);
  };

  return (
    <>
      {step === 0 && <CodePage onSubmit={verifyCode} />}
      {step === 1 && <Tool cancelFn={cancelDialog} saveFn={saveDialog} />}
      {step === 2 && <Completed />}
    </>
  );
};

export default ApplyVED;
