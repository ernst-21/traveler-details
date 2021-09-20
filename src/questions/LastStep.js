import React, { useState, useCallback, useContext, useEffect } from 'react';
import FormSteps from './components/FormSteps';
import { Divider, Input, Space, Typography, Form, Row, Col, Spin } from 'antd';
import ControlButtons from './components/ControlButtons';
import ButtonComponent from '../core/UI/ButtonComponent';
import phone from '../assets/images/phone.jpg';
import messages from '../assets/images/messages.jpg';
import folder from '../assets/images/folder.jpg';
import { UserContext } from '../context/UserContext';
import PersonalDataForm from './components/PersonalDataForm';
import { SendOutlined } from '@ant-design/icons';
import { checkEmail } from '../api/api-user';
import { useHttpError } from '../hooks/http-hook';
import { strongPass, wrongPasswordMessage } from '../utils/strongPassword';

const { Title, Text } = Typography;

const LastStep = ({ setComponentIndex }) => {
  const { user, setUser } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [values] = useState(user.personalData);
  const [hasValidEmail, setHasValidEmail] = useState(values.email || false);
  const { error, showErrorModal, httpError } = useHttpError();

  useEffect(() => {
    if (error) {
      httpError();
    }
    return () => showErrorModal(null);
  }, [error, httpError, showErrorModal]);

  const onChange = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const emailSubmit = () => {
    if (email) {
      setIsLoading(true);
      checkEmail(email).then((data) => {
        if (data && data.length > 0) {
          showErrorModal('A user with this e-mail address already exists.');
          setHasValidEmail(false);
          setIsLoading(false);
        }
        if (data && data.length === 0) {
          setHasValidEmail(true);
          setIsLoading(false);
        }
      });
    }
  };

  const onFinish = (values) => {
    setUser({ ...user, personalData: values });
    setComponentIndex(4);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Space className="last-step" direction="vertical">
      <FormSteps current={2} />
      <br />
      <Title level={3}>Last step before obtaining your budget...</Title>
      <br />
      <Text strong>Enter your email</Text>
      <Form
        name="personal-data"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        initialValues={values}
        value={values}
      >
        <Row>
          <Col span={12} md={{ span: 12 }} xs={{ span: 16 }}>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: 'This field is required.'
                }
              ]}
            >
              <Input
                className='personal-email'
                size="large"
                placeholder="youremail@example.com"
                type="email"
                onChange={onChange}
              />
            </Form.Item>
          </Col>
          <Col>
            {isLoading ? (
              <Spin />
            ) : (
              <ButtonComponent
                className="next-btn ok-email-btn"
                size="large"
                type="primary"
                onClick={emailSubmit}
              >
                Ok
              </ButtonComponent>
            )}
          </Col>
        </Row>
        {hasValidEmail && (
          <Row>
            <Col span={12} md={{ span: 12 }} xs={{ span: 16 }}>
              <Form.Item
                label={
                  <p>
                    <strong>Password</strong>
                  </p>
                }
                labelCol={{ span: 24 }}
                value={password}
                hasFeedback
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'This field is required.'
                  },
                  () => ({
                    validator(_, value) {
                      if (!value || strongPass.test(value)) {
                        return Promise.resolve();
                      }

                      return Promise.reject(new Error(wrongPasswordMessage));
                    }
                  })
                ]}
              >
                <Input
                  size="large"
                  placeholder=""
                  type="password"
                  onChange={onChangePassword}
                />
              </Form.Item>
            </Col>
          </Row>
        )}
        {hasValidEmail && (
          <>
            <PersonalDataForm />
          </>
        )}
        <br />
        <br />
        <Space className="benefits" direction="vertical">
          <Title level={4}>Benefits of your personal space</Title>
          <Space>
            <img src={messages} alt="messages" />
            <Text>
              Live chat with your local agent to create your trip plan
            </Text>
          </Space>
          <Space>
            <img src={folder} alt="folder" />
            <Text>Find all your info: Travel plan, budget, payments.</Text>
          </Space>
          <Space>
            <img src={phone} alt="phone" />
            <Text>Access all theses functions in the mobile app.</Text>
          </Space>
        </Space>
        <Divider />
        <ControlButtons
          both={true}
          type="primary"
          htmlType="submit"
          previous={true}
          next={hasValidEmail}
          clickPrev={() => setComponentIndex(2)}
          text=" Create your personal space"
          nextButtonIcon={<SendOutlined />}
        />
      </Form>
    </Space>
  );
};

export default LastStep;
