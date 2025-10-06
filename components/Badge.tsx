import React from 'react';
import { cn } from '@/lib/utils';
import TextShimmer from './TextShimmer';

export type BadgeVariant =
  | 'default'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'outline';

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: BadgeVariant;
  children: React.ReactNode;
  textShimmer?: boolean;
  baseColor?: string;
  shimmerColor?: string;
}

const badgeVariants: Record<BadgeVariant, string> = {
  default:
    'bg-neutral-200 text-neutral-800 border border-neutral-300 dark:bg-neutral-800 dark:text-neutral-100 dark:border-neutral-700',
  success:
    'bg-green-100 text-green-800 border border-green-200 dark:bg-green-900 dark:text-green-200 dark:border-green-800',
  warning:
    'bg-yellow-100 text-yellow-800 border border-yellow-300 dark:bg-yellow-900 dark:text-yellow-200 dark:border-yellow-800',
  danger:
    'bg-red-100 text-red-800 border border-red-200 dark:bg-red-900 dark:text-red-200 dark:border-red-800',
  info: 'bg-blue-100 text-blue-800 border border-blue-200 dark:bg-blue-900 dark:text-blue-200 dark:border-blue-800',
  outline:
    'bg-transparent text-neutral-800 border border-neutral-300 dark:text-neutral-100 dark:border-neutral-700',
};

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  (
    {
      variant = 'default',
      className,
      children,
      textShimmer = false,
      baseColor,
      shimmerColor,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          'inline-flex items-center rounded px-2 py-0.5 text-xs font-semibold',
          badgeVariants[variant],
          className
        )}
        {...props}
      >
        {textShimmer ? (
          <TextShimmer baseColor={baseColor} shimmerColor={shimmerColor}>
            {typeof children === 'string' ? children : String(children)}
          </TextShimmer>
        ) : (
          children
        )}
      </div>
    );
  }
);

Badge.displayName = 'Badge';

export default Badge;
