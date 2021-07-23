import React, {memo} from 'react';
import { Steps } from 'antd';

const {Step} = Steps;

const FormSteps = (props) => {
  return (
    <Steps className='stepper' size="small" current={props.current}>
      <Step title="Participants" />
      <Step title="Travel Project" />
      <Step title="Contact" />
    </Steps>
  );
};

export default memo(FormSteps);
