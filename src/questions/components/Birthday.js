import React, {memo} from 'react';
import moment from 'moment';
import { DatePicker, Form } from 'antd';

const Birthday = (props) => {

  function disabledDate(current) {
    // Can not select days after today and today
    return current && current > moment().endOf('day');
  }

  return (
    <Form.Item
      name="birthday"
      label={<p><strong>Birthday</strong></p>}
      labelCol={{span: 24}}
    >
      <DatePicker
        disabledDate={disabledDate}
        size={props.size}
      />
    </Form.Item>
  );
};

export default memo(Birthday);
