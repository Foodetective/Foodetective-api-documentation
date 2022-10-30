import React, { FC } from 'react';
import Link from 'next/link';

interface ITopNavProps {
  children: JSX.Element
}

export const TopNav: FC<ITopNavProps> = ({ children }) => {
  return (
    <nav className="fixed w-full z-10 flex items-center justify-between gap-1 px-6 py-4 bg-white border-b-[1px]">
      <Link href="/" className="flex">
        Home
      </Link>
      <section className="flex gap-1">{children}</section>
    </nav>
  );
}
