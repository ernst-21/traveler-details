import React, {memo} from 'react';
import { LeftOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import ButtonComponent from '../../core/UI/ButtonComponent';

const {Text} = Typography;

const MobileControlButton = (props) => {
  return (
    <div className='mobile-controls'>
      <div className="btn-container">
        <ButtonComponent
          className="prev-btn_mobile"
          type="text"
          size="large"
          onClick={props.clickPrev}
          icon={<LeftOutlined />}
        >
          <strong>Previous Step</strong>
        </ButtonComponent>
        {props.steps === true && (<Text className='step_text'>Step {props.number} <Text type='secondary'>of 3</Text></Text>)}
      </div>
    </div>
  );
};

export default memo(MobileControlButton);
