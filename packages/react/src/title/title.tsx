import React from 'react';
import clsx from 'clsx';
import { responsiveClassNames } from '../helper/responsive-class-names';
import { ResponsiveType } from '../shared';

export const titleSizes = ['s', 'm', 'l', 'xl', 'xxl'] as const;
export type TitleSizesType = typeof titleSizes[number];

export const titleVariants = ['primary', 'secondary'] as const;
export type TitleVariantsType = typeof titleVariants[number];

export interface TitleProps {
  children?: React.ReactNode;
  size?: ResponsiveType<TitleSizesType>;
  light?: boolean;
  className?: string;
  variant?: TitleVariantsType;
}

const Title: React.FC<TitleProps> = ({
  children,
  size = 'xxl',
  light = false,
  className = '',
  variant = 'primary',
  ...otherProps
}) => (
  <span
    className={clsx(
      'db-title',
      responsiveClassNames(size, 'db-title--size-'),
      light && 'db-title--light',
      variant === 'secondary' && 'db-title--secondary',
      className
    )}
    {...otherProps}
  >
    {children}
  </span>
);

export default Title;
