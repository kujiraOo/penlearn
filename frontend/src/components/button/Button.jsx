import React from 'react';
import { node, func } from 'prop-types';

import styles from './Button.module.css';

const Button = ({ children, onClick }) => (
  <button
    type="button"
    className={styles.button}
    onClick={onClick}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: node,
  onClick: func,
};

Button.defaultProps = {
  children: null,
  onClick: null,
};

export default Button;
