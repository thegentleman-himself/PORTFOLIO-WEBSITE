import React from 'react';
import { cn } from '@/lib/utils';

export interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black';
  color?: 'primary' | 'secondary' | 'accent' | 'muted' | 'success' | 'warning' | 'error';
  font?: 'primary' | 'mono' | 'display';
  align?: 'left' | 'center' | 'right' | 'justify';
  gradient?: boolean;
  glow?: boolean;
  className?: string;
  children: React.ReactNode;
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  (
    {
      variant = 'p',
      size = 'base',
      weight = 'normal',
      color = 'primary',
      font = 'primary',
      align = 'left',
      gradient = false,
      glow = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const Component = variant as keyof JSX.IntrinsicElements;
    
    const sizeClasses = {
      xs: 'text-xs',
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
      '5xl': 'text-5xl',
    };
    
    const weightClasses = {
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
      extrabold: 'font-extrabold',
      black: 'font-black',
    };
    
    const colorClasses = {
      primary: 'text-light-slate',
      secondary: 'text-neon-cyan',
      accent: 'text-mission-gold',
      muted: 'text-light-slate/70',
      success: 'text-success',
      warning: 'text-warning',
      error: 'text-error',
    };
    
    const fontClasses = {
      primary: 'font-primary',
      mono: 'font-mono',
      display: 'font-display',
    };
    
    const alignClasses = {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
      justify: 'text-justify',
    };
    
    const gradientClasses = gradient ? 'bg-gradient-to-r from-mission-gold via-neon-cyan to-mission-gold bg-clip-text text-transparent' : '';
    const glowClasses = glow ? 'drop-shadow-lg drop-shadow-neon-cyan/50' : '';
    
    return (
      <Component
        ref={ref}
        className={cn(
          sizeClasses[size],
          weightClasses[weight],
          colorClasses[color],
          fontClasses[font],
          alignClasses[align],
          gradientClasses,
          glowClasses,
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Typography.displayName = 'Typography';

export default Typography;