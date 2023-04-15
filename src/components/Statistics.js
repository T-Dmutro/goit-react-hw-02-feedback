import React from 'react';
export const Statistics = ({ onGood, onNeutral, onBad }) => {
  return (
    <div>
      <p>Good:{onGood}</p>
      <p>Neutral:{onNeutral}</p>
      <p>Bad:{onBad}</p>
      <p>Total:{onGood + onNeutral + onBad}</p>
      <p>Positive feedback: {`${Math.round(onGood / (onGood + onNeutral + onBad) * 100)}%`}</p>
    </div>
  );
};
