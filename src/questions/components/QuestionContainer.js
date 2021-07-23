import React, { useState } from 'react';
import CardComponent from '../../core/UI/CardComponent';
import BeforeStarting from '../BeforeStarting';
import Starting from '../Starting';
import TravelIdea from '../TravelIdea';
import LastStep from '../LastStep';
import ConfirmationCard from './ConfirmationCard';
import CreateTripTitle from '../../core/UI/CreateTripTitle';
import MobileControlButton from './MobileControlButton';

const QuestionContainer = () => {
  const [componentIndex, setComponentIndex] = useState(0);
  const components = [
    'BeforeStarting',
    'Starting',
    'TravelIdea',
    'LastStep',
    'Confirmation'
  ];

  if (components[componentIndex] === 'Starting') {
    return (
      <CardComponent className="card-container">
        <MobileControlButton
          number={1}
          steps={true}
          clickPrev={() => setComponentIndex(0)}
        />
        <CreateTripTitle/>
        <Starting setComponentIndex={setComponentIndex} />
      </CardComponent>
    );
  }

  if (components[componentIndex] === 'TravelIdea') {
    return (
      <CardComponent className="card-container">
        <MobileControlButton
          number={2}
          steps={true}
          clickPrev={() => setComponentIndex(1)}
        />
        <CreateTripTitle/>
        <TravelIdea setComponentIndex={setComponentIndex} />
      </CardComponent>
    );
  }

  if (components[componentIndex] === 'LastStep') {
    return (
      <CardComponent className="card-container">
        <MobileControlButton
          number={3}
          steps={true}
          clickPrev={() => setComponentIndex(2)}
        />
        <CreateTripTitle/>
        <LastStep setComponentIndex={setComponentIndex} />
      </CardComponent>
    );
  }

  if (components[componentIndex] === 'Confirmation') {
    return (
      <CardComponent
        className="card-container"
      >
        <MobileControlButton
          number={3}
          steps={false}
          clickPrev={() => setComponentIndex(2)}
        />
        <ConfirmationCard setComponentIndex={setComponentIndex} />
      </CardComponent>
    );
  }

  return (
    <CardComponent className="card-container">
      <CreateTripTitle/>
      <BeforeStarting setComponentIndex={setComponentIndex} />
    </CardComponent>
  );
};

export default QuestionContainer;
