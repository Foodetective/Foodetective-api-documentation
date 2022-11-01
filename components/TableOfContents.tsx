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
            margin: 0.5rem 0;
          }
          li a {
            text-decoration: none;
            color: #a3acb9;
            font-weight: 600;
          }
          li a:hover,
          li.active a {
            color: white;
          }
        `}
      </style>
    </nav>
  );
}
