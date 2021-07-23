import React from 'react';
import { Space, Form, Radio, Row, Col, Select, Input } from 'antd';
import Birthday from './Birthday';
import Terms from './Terms';
import SelectCountries from './SelectCountries';


const { Option } = Select;

const prefixSelector = (
  <Form.Item name="prefix" noStyle>
    <Select
      style={{
        width: 70
      }}
    >
      <Option value="86">+86</Option>
      <Option value="87">+87</Option>
    </Select>
  </Form.Item>
);

const PersonalDataForm = () => {
  return (
    <Space direction='vertical'>
      <Form.Item
        label={<p><strong>Title</strong></p>}
        name='title'
        labelCol={{ span: 24 }}
        rules={[
          {
            required: true,
            message: 'This field is required.'
          }
        ]}
      >
        <Radio.Group>
          <Radio value='Mr.'>Mr.</Radio>
          <Radio value='Mrs.'>Mrs.</Radio>
        </Radio.Group>
      </Form.Item>
      <Row gutter={[16, 16]}>
        <Col
          xl={{ span: 12 }}
          md={{ span: 12 }}
          xs={{ span: 24 }}
          span={12}>
          <Form.Item
            name='name'
            label={<p><strong>Name</strong></p>}
            labelCol={{ span: 24 }}
            rules={[
              {
                required: true,
                message: 'This field is required.'
              }
            ]}
          >
            <Input size='large' />
          </Form.Item>
        </Col>
        <Col
          xl={{ span: 12 }}
          md={{ span: 12 }}
          xs={{ span: 24 }}
          span={12}>
          <Form.Item
            name='lastName'
            label={<p><strong>Last Name</strong></p>}
            labelCol={{ span: 24 }}
            rules={[
              {
                required: true,
                message: 'This field is required.'
              }
            ]}
          >
            <Input size='large'/>
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col
          xl={{ span: 12 }}
          md={{ span: 12 }}
          xs={{ span: 24 }}
          span={12}>
          <SelectCountries />
        </Col>
        <Col
          xl={{ span: 12 }}
          md={{ span: 12 }}
          xs={{ span: 24 }}
          span={12}>
          <Form.Item
            name='phone'
            label={<p><strong>Phone Number</strong></p>}
            labelCol={{ span: 24 }}
            rules={[
              {
                required: true,
                message: 'This field is required.'
              }
            ]}
          >
            <Input
              size='large'
              addonBefore={prefixSelector}
              placeholder='5647 342 456'
            />
          </Form.Item>
        </Col>
      </Row>
      <Birthday size='large' />
      <Terms />
    </Space>
  );
};

export default PersonalDataForm;
