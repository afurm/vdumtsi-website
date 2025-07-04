import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

const sizeClasses = {
  sm: 'max-w-2xl',
  md: 'max-w-4xl',
  lg: 'max-w-6xl',
  xl: 'max-w-7xl',
  full: 'max-w-full'
};

export default function Container({ 
  children, 
  className, 
  size = 'xl' 
}: ContainerProps) {
  return (
    <div 
      className={cn(
        'mx-auto px-6 md:px-12 lg:px-12 xl:px-12',
        sizeClasses[size],
        className
      )}
    >
      {children}
    </div>
  );
} 