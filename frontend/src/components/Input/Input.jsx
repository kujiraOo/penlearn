import React from 'react';
import {
  bool,
  string,
} from 'prop-types';

import styles from './Input.module.css';

const Input = ({
  id, label, error, ...props
}) => (
  <div className={`${styles.input} ${error ? styles.error : ''}`}>
    <label htmlFor={id}>{label}</label>
    <input id={id} {...props} />
  </div>
);

Input.propTypes = {
  id: string.isRequired,
  label: string,
  error: bool,
};

Input.defaultProps = {
  label: undefined,
  error: false,
};

export default Input;
