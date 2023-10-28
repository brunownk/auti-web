import { Link, LinkProps } from "react-router-dom";

import { cn } from "../../app/utils/cn";

export function PageTab({ className, children, ...props}: LinkProps) {
  return (
    <Link 
      {...props}
      className={cn(
        'inline-block p-2 border-b-2 border-transparent rounded-t-lg text-gray-800 hover:border-cyan-400 dark:hover:text-cyan-400 transition-all text-sm md:text-base',
        className,
      )}
    >
      {children}
    </Link>
  )
}