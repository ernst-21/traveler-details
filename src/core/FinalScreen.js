import React from 'react';
import { Result } from 'antd';
import { SmileOutlined } from '@ant-design/icons';

const FinalScreen = () => {
  return (
    <Result
      className='final-screen'
      icon={<SmileOutlined />}
      title="Great, we have done all the operations!"
    />
  );
};

export default FinalScreen;
