import React from 'react';
import {Section} from './Section.styled'
export const Statistics = ({ onGood, onNeutral, onBad, onCountTotalFeedback,onCountPositiveFeedbackPercentage }) => {
  return (
    <Section>
      <p>Good:{onGood}</p>
      <p>Neutral:{onNeutral}</p>
      <p>Bad:{onBad}</p>
      <p>Total:{onCountTotalFeedback()}</p>
      <p>Positive feedback: {onCountPositiveFeedbackPercentage()}</p>
    </Section>
  );
};
