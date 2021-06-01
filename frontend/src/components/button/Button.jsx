import PropTypes from 'prop-types';

import styles from './Button.module.css';

const Button = ({ children, onClick }) => (
  <button 
    className={styles.button}
    onClick={onClick}
  >
    {children}
  </button>
);

Button.protoTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default Button;
