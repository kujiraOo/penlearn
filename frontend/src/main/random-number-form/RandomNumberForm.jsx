import React, { useState } from 'react';
import { func } from 'prop-types';
import Input from '../../components/Input/Input';
import Button from '../../components/button/Button';
import styles from './RandomNumberForm.module.css';

const maxValue = 2147483647;
const minValue = 0;

const RandomNumberInput = (props) => (
  <Input
    type="number"
    min={minValue}
    max={maxValue}
    {...props}
  />
);

const valueValidation = (value) => Math.min(Math.max(minValue, value), maxValue);

const RandomNumberForm = ({ onSubmit }) => {
  const [min, setMin] = useState();
  const [max, setMax] = useState();
  const handleButtonClick = () => onSubmit({ min, max });

  const handleMinChange = ({ target: { value } }) => setMin(valueValidation(value));

  const handleMaxChange = ({ target: { value } }) => setMax(valueValidation(value));

  return (
    <div className={styles.randomNumberForm}>
      <RandomNumberInput
        onChange={handleMinChange}
        id="random-number-min-input"
        label="Min"
        value={min}
      />
      <RandomNumberInput
        onChange={handleMaxChange}
        id="random-number-max-input"
        label="Max"
        value={max}
      />
      <Button onClick={handleButtonClick}>
        Random number!
      </Button>
    </div>
  );
};

RandomNumberForm.propTypes = {
  onSubmit: func.isRequired,
};

export default RandomNumberForm;
