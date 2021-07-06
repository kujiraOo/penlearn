import React from 'react';
import {
  node,
} from 'prop-types';

import styles from './ErrorMessage.module.css';

const ErrorMessage = ({ children }) => (
  <div>
    {children}
  </div>
);

ErrorMessage.propTypes = {
  children: node,
};

ErrorMessage.defaultProps = {
  children: undefined,
};

export default ErrorMessage;
