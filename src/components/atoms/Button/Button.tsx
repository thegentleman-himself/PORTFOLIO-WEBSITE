import React from 'react';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  glow?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      loading = false,
      icon,
      iconPosition = 'left',
      fullWidth = false,
      glow = false,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseClasses = 'inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
    
    const variants = {
      primary: 'bg-neon-cyan text-nasa-blue hover:bg-mission-gold hover:scale-105 focus:ring-neon-cyan focus:ring-offset-nasa-blue',
      secondary: 'bg-transparent border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-nasa-blue focus:ring-neon-cyan focus:ring-offset-nasa-blue',
      outline: 'bg-transparent border-2 border-mission-gold text-mission-gold hover:bg-mission-gold hover:text-nasa-blue focus:ring-mission-gold focus:ring-offset-nasa-blue',
      ghost: 'bg-transparent text-neon-cyan hover:bg-neon-cyan/10 focus:ring-neon-cyan focus:ring-offset-nasa-blue',
      danger: 'bg-error text-white hover:bg-error/90 focus:ring-error focus:ring-offset-nasa-blue',
    };
    
    const sizes = {
      sm: 'px-3 py-2 text-sm rounded-md',
      md: 'px-6 py-3 text-base rounded-lg',
      lg: 'px-8 py-4 text-lg rounded-xl',
      xl: 'px-10 py-5 text-xl rounded-2xl',
    };
    
    const glowClasses = glow ? 'shadow-lg shadow-neon-cyan/25 hover:shadow-xl hover:shadow-neon-cyan/40' : '';
    const widthClasses = fullWidth ? 'w-full' : '';
    
    return (
      <button
        className={cn(
          baseClasses,
          variants[variant],
          sizes[size],
          glowClasses,
          widthClasses,
          className
        )}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        )}
        
        {!loading && icon && iconPosition === 'left' && (
          <span className="mr-2">{icon}</span>
        )}
        
        {children}
        
        {!loading && icon && iconPosition === 'right' && (
          <span className="ml-2">{icon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;