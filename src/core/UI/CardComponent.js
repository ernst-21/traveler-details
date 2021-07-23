import React from 'react';
import { Card } from 'antd';

const CardComponent = (props ) => {
  return <Card {...props} >{props.children}</Card>;
};

export default CardComponent;
