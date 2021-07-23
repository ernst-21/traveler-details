import React, {memo} from 'react';
import { Radio, Space, Typography, Form } from 'antd';

const { Text } = Typography;

const RadioBlock = (props) => {
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
        <Radio.Group>
          <Space direction="vertical">
            {props.options.map((item) => (
              <Radio
                key={item}
                value={item}
              >
                <Text>{item}</Text>
              </Radio>
            ))}
          </Space>
        </Radio.Group>
      </Form.Item>
    </Space>
  );
};

export default memo(RadioBlock);
