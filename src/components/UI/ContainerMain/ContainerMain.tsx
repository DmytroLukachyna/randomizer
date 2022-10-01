import React, { ReactNode } from 'react';
import classNames from 'classnames';
import style from './ContainerMain.module.scss';

export interface ContainerMainProps {
  className?: string;
  children?: ReactNode;
}

const ContainerMain: React.FC<ContainerMainProps> = ({ className, children }) => (
  <div className={classNames(style.component, className)}>{children}</div>
);

export default ContainerMain;
