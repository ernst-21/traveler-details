import React, { useContext, memo, useEffect, useCallback } from 'react';
import { useMutation } from 'react-query';
import { useHistory } from 'react-router-dom';
import { saveUser } from '../../api/api-user';
import { Divider, Typography } from 'antd';
import { UserContext } from '../../context/UserContext';
import ControlButtons from './ControlButtons';
import FormSteps from './FormSteps';

const { Title, Text } = Typography;

const ConfirmationCard = ({ setComponentIndex }) => {
  const { user, setUser } = useContext(UserContext);
  const name = user.personalData.name;
  const history = useHistory();
  const { mutate: createUser, status, error } = useMutation(
    (item) => saveUser(item),
    {
      onSuccess: () => history.push('/end')
    }
  );

  const handleRating = useCallback(() => {
    if ((user.stage.stage === 'I want to book shortly') && (user.travelIdeas.budget >= 2000)) {
      setUser({ ...user, rating: 5 });
    } else if ((user.stage.stage === 'I am starting planning my trip') && (user.travelIdeas.budget) >= 2000) {
      setUser({ ...user, rating: 4 });
    } else {
      setUser({...user, rating: 3});
    }
  }, [setUser, user]);

  useEffect(() => {
    handleRating();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = () => {
    console.log(user);
    setUser(user);
    createUser(user);
  };

  if (status === 'error') {
    return <p>{error.message}</p>;
  }

  return (
    <>
      <FormSteps className="stepper" current={4} />
      <Title
        style={{ marginTop: '1rem' }}
        level={2}
      >{`Wonderful, ${name}!`}</Title>
      <Text>
        Your local agent will contact you as soon as possible. Additional
        Information could be requested in the creation of your tailor-made
        program.
      </Text>
      <br />
      <Divider />
      <ControlButtons
        both={true}
        type="primary"
        htmlType="submit"
        previous={true}
        next={true}
        handleClick={handleSubmit}
        clickPrev={() => setComponentIndex(3)}
        text="Ok"
      />
    </>
  );
};

export default memo(ConfirmationCard);
