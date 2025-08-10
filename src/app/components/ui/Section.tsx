import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  background?: 'white' | 'light' | 'primary' | 'secondary' | 'transparent' | 'glass';
}

const sizeClasses = {
  sm: 'py-12 md:py-16',
  md: 'py-16 md:py-20',
  lg: 'py-20 md:py-24',
  xl: 'py-24 md:py-32'
};

const backgroundClasses = {
  white: 'bg-white',
  light: 'bg-light-gray/30',
  primary: 'bg-primary/10',
  secondary: 'bg-secondary/10',
  transparent: 'bg-transparent',
  glass: 'glass'
};

export default function Section({ 
  children, 
  className, 
  id,
  size = 'lg',
  background = 'white'
}: SectionProps) {
  return (
    <section 
      id={id}
      className={cn(
        sizeClasses[size],
        backgroundClasses[background],
        className
      )}
    >
      {children}
    </section>
  );
} 