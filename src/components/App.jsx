import { useState } from 'react';
import { Buttons } from './Button/Buttons';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification';
import { ContainerApp } from './App/App.styled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const statisticPlus = name => {
    if (name === 'good') {
      setGood(prev => prev + 1);
      return;
    }

    if (name === 'neutral') {
      setNeutral(prev => prev + 1);
      return;
    }
    if (name === 'bad') {
      setBad(prev => prev + 1);
      return;
    }
  };

  const totalCaunt = () => {
    return good + bad + neutral;
  };

  const cauntProzent = () => {
    const prozentValue = (good / (good + neutral + bad)) * 100;
    return Math.round(prozentValue);
  };

  return (
    <ContainerApp>
      <h1>Please leave feedback</h1>
      <Buttons options={['good', 'neutral', 'bad']} onClick={statisticPlus} />
      <h2>Statistics</h2>

      {totalCaunt() > 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalCaunt()}
          prozent={cauntProzent()}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </ContainerApp>
  );
};
