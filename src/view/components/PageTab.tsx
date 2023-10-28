import { ComponentProps } from "react";

import { cn } from "../../app/utils/cn";

interface PageTabProps extends ComponentProps<'button'> {}

export function PageTab({ className, children, ...props}: PageTabProps) {
  return (
    <button 
      {...props}
      className={cn(
        'inline-block p-2 border-b-2 border-transparent rounded-t-lg text-gray-800 hover:border-cyan-400 dark:hover:text-cyan-400 transition-all text-sm md:text-base',
        className,
      )}
    >
      {children}
    </button>
  )
}