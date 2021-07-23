import React, { memo } from 'react';
import { LeftOutlined } from '@ant-design/icons';
import ButtonComponent from '../../core/UI/ButtonComponent';

const ControlButtons = (props) => {
  return (
    <div className={props.both ? 'btn-container' : 'one-btn'}>
      {props.previous && (
        <ButtonComponent
          className="prev-btn"
          type="text"
          size="large"
          onClick={props.clickPrev}
          icon={<LeftOutlined />}
        >
          <strong>Previous Step</strong>
        </ButtonComponent>
      )}
      {props.next && (
        <ButtonComponent
          className="next-btn"
          type={props.type}
          htmlType={props.htmlType}
          size="large"
          icon={props.nextButtonIcon}
          onClick={props.handleClick}
        >
          <strong>{props.text}</strong>
        </ButtonComponent>
      )}
    </div>
  );
};

export default memo(ControlButtons);
