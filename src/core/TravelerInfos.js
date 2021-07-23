import React from 'react';
import ImgContainer from './ImgContainer';
import QuestionContainer from '../questions/components/QuestionContainer';

const TravelerInfos = () => {
  return (
    <div className='traveler-infos_container'>
      <div className='img-holder'>
        <ImgContainer />
      </div>
      <div className='question-container'>
        <QuestionContainer />
      </div>
    </div>
  );
};

export default TravelerInfos;
