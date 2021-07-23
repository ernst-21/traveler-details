import { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import RadioBlock from './components/RadioBlock';
import { Divider, Space, Typography, Form } from 'antd';
import { beforePlanning } from './data';
import ControlButtons from './components/ControlButtons';

const { Title, Text } = Typography;

const BeforeStarting = ({ setComponentIndex }) => {
  const { user, setUser } = useContext(UserContext);
  const [values] = useState(user.stage);

  const onFinish = (values) => {
    setUser({ ...user, stage: values });
    setComponentIndex(1);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Space className='before-starting' direction="vertical">
      <br />
      <Title level={3}>Before starting</Title>
      <Text className='card-subtitle'>Let us help you in the creation of your trip</Text>
      <br />
      <Form
        name="before-starting"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        initialValues={values}
        value={values}
      >
        <RadioBlock
          name='stage'
          question={beforePlanning[0].question}
          explanation={beforePlanning[0].explanation}
          options={beforePlanning[0].options}
        />
        <Divider />
        <Form.Item>
          <ControlButtons
            type="primary"
            htmlType="submit"
            previous={false}
            next={true}
            text='Next Step'
          />
        </Form.Item>
      </Form>
    </Space>
  );
};

export default BeforeStarting;
