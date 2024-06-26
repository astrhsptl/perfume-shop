'use client';

import clsx from 'clsx';
import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import { BaseStyle } from '../styles';

interface NavLinkProps extends LinkProps {
  children: ReactNode;
  className?(isActive: boolean): string;
}

export const NavLink = ({ children, className, ...props }: NavLinkProps) => {
  const pathname = usePathname();

  return (
    <Link
      {...props}
      className={
        className
          ? className(pathname === props.href)
          : clsx(
              BaseStyle.baseLink,
              pathname === props.href && BaseStyle.active
            )
      }
    >
      {children}
    </Link>
  );
};
