import React, { memo } from 'react';
import { Col, InputNumber, Row, Typography, Form } from 'antd';
import { people } from '../data';

const { Text } = Typography;

const People = () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        {people.map((person) => (
          <Col
            xl={{ span: 6 }}
            md={{ span: 12 }}
            xs={{ span: 24 }}
            key={person.name}
          >
            <Form.Item
              label={
                <Text strong style={{ fontSize: 15 }}>
                  {person.age}{' '}
                  <Text style={{ fontSize: 15 }} type="secondary">
                    {person.explanation}
                  </Text>
                </Text>
              }
              labelCol={{ span: 24 }}
              name={person.name}
              initialValue={person.min}
            >
              <InputNumber
                type='number'
                className="input-people"
                size="large"
                min={person.min}
              />
            </Form.Item>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default memo(People);
