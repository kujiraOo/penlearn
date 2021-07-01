import React, { useEffect, useState } from 'react';

import { getRandomNumbers, addRandomNumber } from '../utils/client';
import Table from '../components/table/Table';
import Button from '../components/button/Button';
import FlexContainer from '../components/flex-container/FlexContainer';
import RandomNumberInput from './random-number-input/RandomNumberInput';

const Main = () => {
  const [randomNumbers, setRandomNumbers] = useState([]);

  useEffect(() => {
    const fetchRandomNumbers = async () => {
      const response = (await getRandomNumbers()) || [];

      setRandomNumbers(response);
    };

    fetchRandomNumbers();
  }, []);

  const onButtonClick = async () => {
    const randomNumber = await addRandomNumber();

    setRandomNumbers([...randomNumbers, randomNumber]);
  };

  return (
    <>
      <Table
        idProp="id"
        data={randomNumbers}
      />
      <FlexContainer>
        <Button onClick={onButtonClick}>
          Wrong Random number!
        </Button>
      </FlexContainer>
      <hr />
      <FlexContainer>
        <RandomNumberInput />
      </FlexContainer>
    </>
  );
};

export default Main;
