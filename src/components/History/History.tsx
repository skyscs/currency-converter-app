import React from 'react';
import { useSelector } from 'react-redux';
import { getHistory } from '../../selectors';

const History = () => {
  const conversions = useSelector(getHistory);

  if (!conversions.length) {
    return null;
  }

  return (
    <div>
      <h1>History of conversions</h1>
      <ul>
        {conversions.map((conversion, index) => (
          <li key={`${conversion.from}-${conversion.to}-${conversion.amount}-${index}`}>
            {conversion.amount} {conversion.from} to {conversion.to} is{' '}
            {conversion.result.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
