import React, { ReactNode } from 'react';
import classNames from 'classnames';
import style from './Container.module.scss';

export interface ContainerProps {
  gap?: '8' | '20';
  className?: string;
  children?: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ gap, className, children }) => (
  <div
    className={classNames(
      style.container,
      {
        [style[`gap_${gap}`]]: gap,
      },
      className,
    )}
  >
    {children}
  </div>
);

export default Container;
