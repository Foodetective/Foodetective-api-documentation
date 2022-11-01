import React from 'react';
import Link from 'next/link';

export function TableOfContents({toc}) {
  const items = toc.filter(
    (item) => item.id && (item.level === 2 || item.level === 3)
  );

  if (items.length <= 1) {
    return null;
  }

  return (
    <nav className="tocnav">
      <ul className="flex column">
        {items.map((item) => {
          const href = `#${item.id}`;
          const active =
            typeof window !== 'undefined' && window.location.hash === href;
          return (
            <li
              key={item.title}
              className={[
                active ? 'active' : undefined,
                item.level === 3 ? 'padded' : undefined,
              ]
                .filter(Boolean)
                .join(' ')}
            >
              <Link href={href} passHref legacyBehavior>
                <a>{item.title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
      <style jsx>
        {`
          nav {
            position: sticky;
            top: var(--top-nav-height);
            height: calc(100vh - var(--top-nav-height));
            flex: 0 0 auto;
            overflow-y: auto;
            padding: 2rem;
            background-color: #fbfcfd;
            // border-left: 1px solid var(--border-color);
          }
          ul {
            padding: 0;
            margin: 0;
          }
          li:first-child {
            margin: 0;
          }
          li {
            list-style: none;
            padding: 0.5rem;
          }
          li:hover {
            background-color: rgba(141, 151, 161, 0.15);
            border-radius: 6px;
          }
          li a {
            text-decoration: none;
            color: #57575a;
            font-weight: 500;
          }
          li a:hover {
            color: #57575a;
          }
          li.active {
            background-color: rgba(141, 151, 161, 0.15);
            border-radius: 6px;
          }
          li.active a {
            color: #4c68ff;
          }
        `}
      </style>
    </nav>
  );
}
