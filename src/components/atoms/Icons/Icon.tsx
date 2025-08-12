import React from 'react';
import { cn } from '@/lib/utils';
import * as LucideIcons from 'lucide-react';

export interface IconProps {
  name?: string;
  emoji?: string;
  lucide?: keyof typeof LucideIcons;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  className?: string;
  onClick?: () => void;
  color?: string;
  glow?: boolean;
}

const Icon = React.forwardRef<HTMLSpanElement, IconProps>(
  (
    {
      name,
      emoji,
      lucide,
      size = 'md',
      className,
      onClick,
      color,
      glow = false,
      ...props
    },
    ref
  ) => {
    const sizeClasses = {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
    };
    
    const glowClasses = glow ? 'drop-shadow-lg drop-shadow-neon-cyan/50' : '';
    const clickableClasses = onClick ? 'cursor-pointer hover:scale-110 transition-transform duration-200' : '';
    
    // If emoji is provided, render it
    if (emoji) {
      return (
        <span
          ref={ref}
          className={cn(
            sizeClasses[size],
            clickableClasses,
            glowClasses,
            className
          )}
          onClick={onClick}
          role="img"
          aria-label={name || 'emoji'}
          {...props}
        >
          {emoji}
        </span>
      );
    }
    
    // If lucide icon is provided, render it
    if (lucide) {
      const LucideIcon = LucideIcons[lucide];
      if (LucideIcon) {
        return (
          <LucideIcon
            className={cn(
              sizeClasses[size],
              clickableClasses,
              glowClasses,
              color && `text-${color}`,
              className
            )}
            onClick={onClick}
            {...props}
          />
        );
      }
    }
    
    // Default fallback
    return (
      <span
        ref={ref}
        className={cn(
          sizeClasses[size],
          clickableClasses,
          glowClasses,
          className
        )}
        onClick={onClick}
        {...props}
      >
        {name || '•'}
      </span>
    );
  }
);

Icon.displayName = 'Icon';

export default Icon;