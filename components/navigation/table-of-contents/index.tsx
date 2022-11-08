import React from 'react';
import Link from 'next/link';
import styles from './index.module.scss'

export function TableOfContents({toc}) {
  const items = toc.filter(
    (item) => item.id && (item.level === 2 || item.level === 3)
  );

  // if (items.length <= 1) {
  //   return null;
  // }

  return (
    <nav className={styles['tocnav']}>
      <p className={styles['tocnav-title']}>Table of contents</p>
      <ul className={styles['tocnav-items']}>
        {items.map((item) => {
          const href = `#${item.id}`;
          const active =
            typeof window !== 'undefined' && window.location.hash === href;
          return (
            <li key={item.title} className={active ? styles['active'] : ''}>
              <Link href={href} passHref legacyBehavior>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
