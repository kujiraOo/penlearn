import { useEffect, useState } from 'react';

import { getRandomNumbers, addRandomNumber } from '../utils/client';
import Table from '../components/table/Table';
import Button from '../components/button/Button';

const Main = () => {
  const [randomNumbers, setRandomNumbers] = useState([]);

  useEffect(() => {
    const fetchRandomNumbers = async() => {
      const response = (await getRandomNumbers()) || [];

      setRandomNumbers(response);
    };

    fetchRandomNumbers();
  }, []);

  const onButtonClick = async () => {
    const response = await addRandomNumber();

    console.log(response);
  };

  return (
    <>
      <Table data={randomNumbers} />
      <Button onClick={onButtonClick}>
        Random number!
      </Button>
    </>
  );
};

export default Main;
