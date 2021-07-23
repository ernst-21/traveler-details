import React, {memo} from 'react';
import { Checkbox, Space, Typography, Form } from 'antd';

const { Text } = Typography;

const CheckboxBlock = (props) => {
  return (
    <Space direction="vertical">
      <Text strong>
        {props.question} <Text type="secondary">{props.explanation}</Text>
      </Text>
      <Form.Item
        name={props.name}
        rules={[
          {
            required: true,
            message: 'This field is required.'
          },
        ]}
      >
        <Checkbox.Group
          style={{ width: '100%' }}
        >
          <Space direction="vertical">
            {props.options.map((item) => (
              <Checkbox key={item} value={item}>
                <Text>{item}</Text>
              </Checkbox>
            ))}
          </Space>
        </Checkbox.Group>
      </Form.Item>
    </Space>
  );
};

export default memo(CheckboxBlock);
