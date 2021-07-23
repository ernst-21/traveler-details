import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { startingProject } from './data';
import { Space, Typography, Divider, Form } from 'antd';
import EstimatedDate from './components/EstimatedDate';
import TravelDates from './components/TravelDates';
import People from './components/People';
import RadioBlock from './components/RadioBlock';
import ControlButtons from './components/ControlButtons';
import ApproxDuration from './components/ApproxDuration';
import FormSteps from './components/FormSteps';
import { disabledDate } from '../utils/dates';

const { Title, Text } = Typography;

const Starting = ({ setComponentIndex }) => {
  const { user, setUser } = useContext(UserContext);
  const [form] = Form.useForm();
  const [values] = useState(user.travelInfo);

  const handleSubmit = (values) => {
    let newValues;
    if (form.getFieldValue('with') === 'Couple') {
      newValues = { ...values, adults: 2, young: 0, children: 0, babies: 0 };
    } else if (form.getFieldValue('with') === 'Alone') {
      newValues = { ...values, adults: 1, young: 0, children: 0, babies: 0 };
    } else {
      newValues = values;
    }
    setUser({...user, travelInfo: newValues});
    setComponentIndex(2);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Space className='starting' direction="vertical">
      <FormSteps className='stepper' current={0} />
      <br />
      <Title level={3}>Starting...</Title>
      <Text className='card-subtitle'>Request a travel plan for free to local agents</Text>
      <br />
      <Form
        form={form}
        name="starting"
        onFinish={handleSubmit}
        onFinishFailed={onFinishFailed}
        initialValues={values}
        value={values}
      >
        <RadioBlock
          name="with"
          question={startingProject[0].question}
          explanation={startingProject[0].explanation}
          options={startingProject[0].options}
        />
        <Form.Item shouldUpdate>
          {() =>
            form.getFieldValue('with') === 'Couple' ? (
              <RadioBlock
                name="motive"
                question={startingProject[1].question}
                explanation={startingProject[1].explanation}
                options={startingProject[1].options}
              />
            ) : form.getFieldValue('with') === 'Friends' ||
            form.getFieldValue('with') === 'Family' ||
            form.getFieldValue('with') === 'Group' ? (
                <People />
              ) : null
          }
        </Form.Item>
        <RadioBlock
          name="knowDate"
          question={startingProject[2].question}
          explanation={startingProject[2].explanation}
          options={startingProject[2].options}
        />
        <Form.Item shouldUpdate>
          {() =>
            form.getFieldValue('knowDate') === 'Yes' ? (
              <Space size={24}>
                <Form.Item
                  name="range"
                  rules={[
                    {
                      required: true,
                      message: 'This field is required.'
                    }
                  ]}
                >
                  <TravelDates size="large" />
                </Form.Item>
              </Space>
            ) : form.getFieldValue('knowDate') === 'No' ? (
              <Space className='date-duration' size={12}>
                <EstimatedDate
                  size="large"
                  picker="month"
                  disabledDate={disabledDate} />
                <ApproxDuration
                  size="large"
                  placeholder='estimated duration'
                  style={{width: 200}}
                  options={startingProject[3].text}
                />
              </Space>
            ) : null
          }
        </Form.Item>

        <Divider />
        <Form.Item>
          <ControlButtons
            htmlType="submit"
            type="primary"
            both={true}
            previous={true}
            next={true}
            clickPrev={() => setComponentIndex(0)}
            text='Next Step'
          />
        </Form.Item>
      </Form>
    </Space>
  );
};

export default Starting;
