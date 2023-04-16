import React from 'react';
import {Section, TextP,Number} from './Section.styled'
export const Statistics = ({ onGood, onNeutral, onBad, onCountTotalFeedback,onCountPositiveFeedbackPercentage }) => {
  return (
    <Section>
      <TextP>Good: <Number>{onGood}</Number></TextP>
      <TextP>Neutral: <Number>{onNeutral}</Number></TextP>
      <TextP>Bad:  <Number>{onBad}</Number></TextP>
      <TextP>Total: <Number>{onCountTotalFeedback()}</Number></TextP>
      <TextP>Positive feedback: <Number>{onCountPositiveFeedbackPercentage()}</Number></TextP>
    </Section>
  );
};
