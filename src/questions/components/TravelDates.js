import React, {memo} from 'react';
import { DatePicker, Form } from 'antd';

const { RangePicker } = DatePicker;


const TravelDates = (props) => {
  return (
    <Form.Item
      name="range"
      rules={[
        {
          required: true,
          message: 'This field is required.'
        }
      ]}
    >
      <RangePicker size={props.size} />
    </Form.Item>
  );
};

export default memo(TravelDates);
