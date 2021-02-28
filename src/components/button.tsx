/*************************
 * Copyright (C) Vinci Facilities - Primatice - All Rights Reserved.
 * SIREN: 808 461 248
 * This source code is proprietary and confidential. Unauthorized copy of its content,
 * via any medium, is strictly prohibited.
 * This source code is part of the TwinOps project, and may not be used into any
 * other projects without express authorization from Primatice.
 * The content of this file is covered by the terms described in the LICENSING file
 * located at the root of this project.
 *************************/

import type { ButtonHTMLAttributes } from 'react';
import React from 'react';
type Color = 'default' | 'primary' | 'error';

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
type StyleType = 'primary' | 'secondary';

const getBackgroundColor = (color: Color): string => {
  switch (color) {
    case 'primary':
      return 'bg-blue-500';
    case 'error':
      return 'bg-red-500';
    default:
      return '';
  }
};

const getBackgroundHoverColor = (color: Color): string => {
  switch (color) {
    case 'primary':
      return 'hover:bg-blue-900';
    case 'error':
      return 'hover:bg-red-900';
    default:
      return '';
  }
};

const getBorderColor = (color: Color): string => {
  switch (color) {
    case 'primary':
      return 'border-blue-500';
    case 'error':
      return 'border-red-500';
    default:
      return '';
  }
};

const getSize = (size: Size): string => {
  switch (size) {
    case 'xs':
      return 'text-xs';
    case 'sm':
      return 'text-sm';
    case 'md':
      return 'text-base';
    case 'lg':
      return 'text-lg';
    case 'xl':
      return 'text-xl';
    case '2xl':
      return 'text-2xl';
    default:
      return 'text-xs';
  }
};

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: Color;
  fullWidth?: boolean;
  loading?: boolean;
  size?: Size;
  styleType?: StyleType;
  circleIcon?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, Props>(function Button(
  {
    color = 'default',
    children,
    fullWidth,
    loading,
    size = 'md',
    styleType = 'primary',
    circleIcon = false,
    ...rest
  },
  ref,
) {
  rest.disabled = loading ? loading : rest.disabled;

  const buildCSSClass = () =>
    `rounded border ${fullWidth ? 'w-full' : ''} ${
      styleType === 'primary'
        ? `button-hover-adjust-brightness hover:shadow-dark-sm
          ${getBackgroundColor(color)}
          shadow-xs ${getBorderColor(color)} hover:border-layer`
        : `bg-transparent shadow-xs ${getBorderColor(
            color,
          )} hover:border-transparent hover:font-semibold`
    } ${getSize(size)} ${getBackgroundHoverColor(color)}
      py-1 px-2 font-semibold font-thin  transform ease-in-out duration-300 ${
        rest.disabled ? 'opacity-50 cursor-not-allowed' : ''
      } inline-flex items-center focus:outlined-none active:transform active:scale-90 ${
      loading ? 'relative' : ''
    }`;

  return (
    <button
      ref={ref}
      className={`${buildCSSClass()}`}
      {...rest}
      onMouseEnter={evt => {
        if (rest.onMouseEnter) {
          rest.onMouseEnter(evt);
        }
      }}
      onMouseLeave={evt => {
        if (rest.onMouseLeave) {
          rest.onMouseLeave(evt);
        }
      }}
    >
      <span
        className={`inline-flex items-center m-auto${
          loading ? ' invisible' : ''
        }`}
      >
        {children}
      </span>
    </button>
  );
});

export default Button;
