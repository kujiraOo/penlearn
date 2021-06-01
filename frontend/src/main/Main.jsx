import { useEffect, useState } from 'react';

import { getRandomNumbers } from '../utils/client';
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

  return (
    <>
      <Table data={randomNumbers} />
      <Button>
        Random number!
      </Button>
    </>
  )
};

export default Main;
