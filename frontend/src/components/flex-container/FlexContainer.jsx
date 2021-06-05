import React from 'react';
import { node } from 'prop-types';

import styles from './FlexContainer.module.css';

const FlexContainer = ({ children }) => (
  <div className={styles.flexContainer}>
    {children}
  </div>
);

FlexContainer.propTypes = {
  children: node,
};

FlexContainer.defaultProps = {
  children: null,
};

export default FlexContainer;
