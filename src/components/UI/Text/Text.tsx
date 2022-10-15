import React, { ReactNode } from 'react';
import classNames from 'classnames';
import style from './Text.module.scss';

export interface TextProps {
  type?: 'title' | 'result' | 'text' | 'button' | 'inherit' | 'font';
  textAlign?: 'left' | 'center' | 'right' | 'justify';
  className?: string;
  children?: ReactNode;
}

const mapping = {
  title: 'h1',
  result: 'h2',
  text: 'span',
  button: 'span',
  inherit: 'span',
  font: 'span',
};

const Text: React.FC<TextProps> = ({
  type = 'text',
  textAlign = 'center',
  className,
  children,
}) => {
  return React.createElement(
    mapping[type],
    {
      className: classNames(
        style.text,
        style[`type_${type}`],
        style[`text-align_${textAlign}`],
        className,
      ),
    },
    children,
  );
};

export default Text;
