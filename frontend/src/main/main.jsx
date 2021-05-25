import { useEffect, useState } from 'react';

import { getRandomNumbers } from '../utils/client';
import Table from '../components/table/table'

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
    <div>
      <Table data={randomNumbers} />
    </div>
  )
}

export default Main;
