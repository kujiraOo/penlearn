import React, { useState } from 'react';
import { func } from 'prop-types';
import Input from '../../components/Input/Input';
import Button from '../../components/button/Button';
import styles from './RandomNumberForm.module.css';
import ErrorMessage from '../../components/error-message/ErrorMessage';

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
  const [min, setMin] = useState('');
  const [max, setMax] = useState('');
  const [minError, setMinError] = useState();
  const [maxError, setMaxError] = useState();

  const handleButtonClick = () => {
    if (!Number.isInteger(min)) setMinError('Min is required');
    if (!Number.isInteger(max)) setMaxError('Max is required');
    if (Number.isInteger(min) && Number.isInteger(max)) onSubmit({ min, max });
  };

  const handleMinChange = ({ target: { value } }) => {
    setMin(valueValidation(value));
    setMinError(undefined);
  };

  const handleMaxChange = ({ target: { value } }) => {
    setMax(valueValidation(value));
    setMaxError(undefined);
  };

  return (
    <div>
      <div className={styles.randomNumberForm}>
        <RandomNumberInput
          onChange={handleMinChange}
          id="random-number-min-input"
          label="Min"
          value={min}
          error={!!minError}
        />

        <RandomNumberInput
          onChange={handleMaxChange}
          id="random-number-max-input"
          label="Max"
          value={max}
          error={!!maxError}
        />

        <Button onClick={handleButtonClick}>
          Random number!
        </Button>

      </div>
      <ErrorMessage>
        <p>{minError}</p>
        <p>{maxError}</p>
      </ErrorMessage>
    </div>
  );
};

RandomNumberForm.propTypes = {
  onSubmit: func.isRequired,
};

export default RandomNumberForm;
