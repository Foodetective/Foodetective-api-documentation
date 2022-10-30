import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const items = [
  {
    title: 'Get started',
    links: [
      {href: '/introduction', children: 'Introduction'}, 
      {href: '/authentication', children: 'Authentication Guide'},
      {href: '/requestaccess', children: 'Request Access'},
      {href: '/foodetectiveuniversalapi', children: 'Universal API'},
      {href: '/errors', children: 'Errors'},
    ],
  },
  {
    title: 'APIs',
    links: [
      {href: '/apis', children: 'Introduction'}
    ],
  },
];

export function SideNav() {
  const router = useRouter();

  return (
    <nav className="sticky h-full overflow-y-auto border-r-[1px] p-6 shrink-0 pt-20">
      {items.map((item) => (
        <div key={item.title}>
          <span className="text-xl font-medium p-0">{item.title}</span>
          <ul className="flex-col">
            {item.links.map((link) => {
              const active = router.pathname === link.href;
              return (
                <li key={link.href} className={active ? 'underline list-none' : 'hover:underline list-none'}>
                  <Link {...link}>
                    {link.children}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}
