import React, { ReactNode } from 'react';
import classNames from 'classnames';
import style from './Container.module.scss';
import { JustifyContent, AlignItems } from 'types/layoutTypes';

export interface ContainerProps {
  gap?: '8' | '20';
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
  wrap?: boolean;
  className?: string;
  children?: ReactNode;
}

const Container: React.FC<ContainerProps> = ({
  gap,
  justifyContent,
  alignItems,
  wrap,
  className,
  children,
}) => (
  <div
    className={classNames(
      style.container,
      {
        [style[`gap_${gap}`]]: gap,
        [style[`justify-content_${justifyContent}`]]: justifyContent,
        [style[`align-items_${alignItems}`]]: alignItems,
        [style.wrap]: wrap,
      },
      className,
    )}
  >
    {children}
  </div>
);

export default Container;
