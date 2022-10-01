import React from 'react';
import classNames from 'classnames';
import style from './Input.module.scss';

export interface InputProps {
  value: string;
  className?: string;
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
}

const Input: React.FC<InputProps> = ({ value, className, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
  };
  return (
    <input
      type="number"
      className={classNames(style.input, className)}
      value={value}
      onChange={handleChange}
    />
  );
};

export default Input;
