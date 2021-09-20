import React, { useState, useContext } from 'react';
import { Space, Input, InputNumber, Typography, Divider, Form } from 'antd';
import CheckboxBlock from './components/CheckboxBlock';
import RadioBlock from './components/RadioBlock';
import { projectIdea } from './data';
import ControlButtons from './components/ControlButtons';
import FormSteps from './components/FormSteps';
import { UserContext } from '../context/UserContext';

const { Title, Text } = Typography;
const { TextArea } = Input;

const TravelIdea = ({ setComponentIndex }) => {
  const { user, setUser } = useContext(UserContext);
  const [form] = Form.useForm();
  const [values] = useState(user.travelIdeas);

  const onFinish = (values) => {
    const userInfo = { ...user, travelIdeas: values };
    setUser(userInfo);
    setComponentIndex(3);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Space direction="vertical">
      <FormSteps current={1} />
      <br />
      <Title level={3}>Describe your trip as you imagine it</Title>
      <Text className='card-subtitle'>
        This form is not definitive and will serve as a guide for travel agents
        to make you an offer adapted to your travel wishes. All answers are
        required
      </Text>
      <br />
      <Form
        form={form}
        name='project-idea'
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        initialValues={values}
        value={values}
      >
        <CheckboxBlock
          name='travelType'
          question={projectIdea[0].question}
          explanation={projectIdea[0].explanation}
          options={projectIdea[0].options}
        />
        <br />
        <CheckboxBlock
          name='accommodationType'
          question={projectIdea[1].question}
          explanation={projectIdea[1].explanation}
          options={projectIdea[1].options}
        />
        <br />
        <Text strong>
          Describe your project <Text type="secondary">(optional)</Text>
        </Text>
        <br/>
        <Text type="secondary">
          Tell us the reasons you want to travel, what you like to do and the
          things that should be present in your travel
        </Text>
        <Form.Item name='description'>
          <TextArea rows={4} />
        </Form.Item>
        <br />
        <RadioBlock
          name='accompaniment'
          question={projectIdea[2].question}
          explanation={projectIdea[2].explanation}
          options={projectIdea[2].options}
        />
        <br />
        <Text strong>
          Average budget per person <Text type="secondary">(optional)</Text>
        </Text>
        <Space className='budget-container'>
          <Form.Item
            name='budget'
          >
            <InputNumber
              type='number'
              style={{marginTop: '1rem', width: 90}}
              min={0}
              placeholder='$'
              size='large'
            />
          </Form.Item>
          <Text type="secondary">per person, flight tickets not included</Text>
        </Space>
        <Divider />
        <Form.Item>
          <ControlButtons
            both={true}
            type='primary'
            htmlType='submit'
            previous={true}
            next={true}
            clickPrev={() => setComponentIndex(1)}
            text='Next Step'
          />
        </Form.Item>

      </Form>

    </Space>
  );
};

export default TravelIdea;
