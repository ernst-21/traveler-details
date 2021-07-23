import React, {memo} from 'react';
import { DatePicker, Form } from 'antd';

const Birthday = (props) => {
  return (
    <Form.Item
      name="birthday"
      label={<p><strong>Birthday</strong></p>}
      labelCol={{span: 24}}

    >
      <DatePicker
        size={props.size}
      />
    </Form.Item>
  );
};

export default memo(Birthday);
