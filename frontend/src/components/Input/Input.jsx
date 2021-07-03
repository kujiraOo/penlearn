import React from 'react';
import {
  string,
} from 'prop-types';

import styles from './Input.module.css';

const Input = ({ id, label, ...props }) => (
  <div className={styles.input}>
    <label htmlFor={id}>{label}</label>
    <input id={id} {...props} />
  </div>
);

Input.propTypes = {
  id: string.isRequired,
  label: string,
};

Input.defaultProps = {
  label: undefined,
};

export default Input;
