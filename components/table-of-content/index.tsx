import React from 'react';
import Link from 'next/link';

export function TableOfContents({ toc }) {
  const items = toc.filter(
    (item) => item.id && (item.level === 2 || item.level === 3)
  );

  if (items.length <= 1) {
    return null;
  }

  return (
    <nav className="sticky pt-20 h-full flex-auto shrink-0 self-start mb-2 px-4 border-l-[1px]">
      <ul className="flex-col pl-6">
        {items.map((item) => {
          const href = `#${item.id}`;
          const active =
            typeof window !== 'undefined' && window.location.hash === href;
          return (
            <li
              key={item.title}
              className={[
                active ? 'underline list-none mt-2' : 'hover:underline list-none mt-2',
                item.level === 3 ? 'padded pl-2' : undefined,
              ]
                .filter(Boolean)
                .join(' ')}
            >
              <Link href={href} passHref>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
