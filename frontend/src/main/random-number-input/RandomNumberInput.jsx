import React, { useState } from 'react';
import Input from '../../components/Input/Input';
import Button from '../../components/button/Button';

const RandomNumberInput = () => {
  const [min, setMin] = useState();
  const [max, setMax] = useState();
  const handleButtonClick = () => console.log(min, max);
  const handleMinChange = (event) => setMin(event.target.value);
  const handleMaxChange = (event) => setMax(event.target.value);
  return (
    <div>
      <Input onChange={handleMinChange} id="random-number-min-input" label="Min" />
      <Input onChange={handleMaxChange} id="random-number-max-input" label="Max" />
      <Button onClick={handleButtonClick}>
        Random number!
      </Button>
    </div>
  );
};

export default RandomNumberInput;
