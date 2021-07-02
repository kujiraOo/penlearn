import React, { useEffect, useState } from 'react';

import { getRandomNumbers, addRandomNumber } from '../utils/client';
import Table from '../components/table/Table';
import FlexContainer from '../components/flex-container/FlexContainer';
import RandomNumberForm from './random-number-form/RandomNumberForm';

const Main = () => {
  const [randomNumbers, setRandomNumbers] = useState([]);

  useEffect(() => {
    const fetchRandomNumbers = async () => {
      const response = (await getRandomNumbers()) || [];

      setRandomNumbers(response);
    };

    fetchRandomNumbers();
  }, []);

  const handleRandomNumberSubmit = async (options) => {
    const randomNumber = await addRandomNumber(options);

    setRandomNumbers([...randomNumbers, randomNumber]);
  };
  return (
    <>
      <Table
        idProp="id"
        data={randomNumbers}
      />
      <FlexContainer>
        <RandomNumberForm onSubmit={handleRandomNumberSubmit} />
      </FlexContainer>
    </>
  );
};

export default Main;
