import React from 'react';
import {
  string,
  func,
} from 'prop-types';

import styles from './Input.module.css';

const Input = ({ id, label, onChange }) => (
  <div className={styles.input}>
    <label htmlFor={id}>{label}</label>
    <input onChange={onChange} type="text" id={id} />
  </div>
);

Input.propTypes = {
  id: string.isRequired,
  label: string,
  onChange: func,
};

Input.defaultProps = {
  label: undefined,
  onChange: undefined,
};

export default Input;
