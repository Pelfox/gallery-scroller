import type { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface ControlButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function ControlButton({ className, ...props }: ControlButtonProps) {
  return (
    <button
      {...props}
      className={twMerge(
        'p-1.5 border border-neutral-200 rounded-full cursor-pointer hover:bg-neutral-100 transition-colors',
        className,
      )}
    />
  );
}
