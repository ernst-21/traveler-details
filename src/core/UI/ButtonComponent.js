import React from 'react';
import { Button } from 'antd';

const ButtonComponent = (props) => {
  return <Button {...props}>{props.children}</Button>;
};

export default ButtonComponent;
