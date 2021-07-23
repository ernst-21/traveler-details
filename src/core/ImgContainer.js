import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

const ImgContainer = () => {
  return (
    <div className='img-container' >
      <Title className='img-title' level={1}>
        Create your Trip
      </Title>
    </div>
  );
};

export default ImgContainer;
