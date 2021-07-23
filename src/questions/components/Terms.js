import React, {memo} from 'react';
import { Checkbox, Form } from 'antd';


const Terms = () => {
  return (
    <Form.Item
      name='terms'
      rules={[
        {
          required: true,
          message: 'This field is required.'
        }
      ]}
    >
      <Checkbox.Group>
        <Checkbox value='read'>
          I have read the <a href='#'>Terms and Conditions</a>
        </Checkbox>
      </Checkbox.Group>
    </Form.Item>
  );
};

export default memo(Terms);
