import React from 'react';
import { Text } from 'components/UI/Text';
import style from './RandomNumber.module.scss';

export interface RandomNumberProps {
  randomNumber: number;
  notRandom: boolean;
}

const RandomNumber: React.FC<RandomNumberProps> = ({ notRandom, randomNumber }) => {
  return (
    <div className={style.component}>
      <Text className={style.title} type="font">
        {notRandom ? 'Number' : 'Random number'}
      </Text>
      <Text className={style.number} type="font">
        {isNaN(randomNumber) ? '😉' : randomNumber}
      </Text>
    </div>
  );
};

export default RandomNumber;
