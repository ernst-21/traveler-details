import React, {memo} from 'react';
import { DatePicker, Form } from 'antd';

const EstimatedDate = (props) => {
  return (
    <Form.Item
      name="estimatedDate"
      rules={[
        {
          required: true,
          message: 'This field is required.'
        }
      ]}
    >
      <DatePicker
        size={props.size}
        picker={props.picker}
        disabledDate={props.disabledDate}
      />
    </Form.Item>
  );
};

export default memo(EstimatedDate);
