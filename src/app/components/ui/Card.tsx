import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'outlined' | 'elevated' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  hover?: boolean;
  onClick?: () => void;
}

const variantClasses = {
  default: 'bg-white border border-gray-100 shadow-sm',
  outlined: 'bg-white border-2 border-secondary/20',
  elevated: 'bg-white shadow-lg',
  ghost: 'bg-transparent'
};

const sizeClasses = {
  sm: 'p-4 rounded-md',
  md: 'p-6 rounded-lg',
  lg: 'p-8 rounded-xl'
};

export default function Card({ 
  children, 
  className, 
  variant = 'default',
  size = 'md',
  hover = false,
  onClick
}: CardProps) {
  const Component = onClick ? 'button' : 'div';
  
  return (
    <Component
      onClick={onClick}
      className={cn(
        'transition-all duration-300',
        variantClasses[variant],
        sizeClasses[size],
        hover && 'hover:shadow-lg hover:scale-105',
        onClick && 'cursor-pointer focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2',
        className
      )}
    >
      {children}
    </Component>
  );
} 