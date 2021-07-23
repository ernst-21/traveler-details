import React, {memo} from 'react';
import { Form, Select } from 'antd';
import { travelerCountry } from '../data';

const countries  = travelerCountry.countries;

const { Option } = Select;

const SelectCountries = () => {
  return (
    <Form.Item
      name='country'
      label={<p><strong>Country</strong></p>}
      labelCol={{ span: 24 }}
      rules={[
        {
          required: true,
          message: 'This field is required.'
        }
      ]}
    >
      <Select
        size='large'
      >
        {countries.map(country => (
          <Option key={country} value={country}>{country}</Option>
        ))}
      </Select>
    </Form.Item>
  );
};

export default memo(SelectCountries);
