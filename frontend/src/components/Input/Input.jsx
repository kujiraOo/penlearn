/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import {
  string,
  func,
} from 'prop-types';

const Input = ({ id, label, onChange }) => (
  <div>
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
