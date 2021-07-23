import React, {memo} from 'react';
import { Form, Select } from 'antd';

const { Option } = Select;

const ApproxDuration = (props) => {
  return (
    <Form.Item
      name="duration"
      rules={[
        {
          required: true,
          message: 'This field is required.'
        }
      ]}
    >
      <Select
        size={props.size}
        placeholder={props.placeholder}
        style={props.style}
      >
        {props.options.map(item => (
          <Option key={item} value={item}>{item}</Option>
        ))}
      </Select>
    </Form.Item>
  );
};

export default memo(ApproxDuration);
