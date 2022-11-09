import React from 'react';
import Link from 'next/link';
import styles from './index.module.scss'

export function TableOfContents({toc}) {
  const items = toc.filter(
    (item) => item.id && (item.level === 2 || item.level === 3)
  )

  if (items.length < 1) {
    return null
  }

  return (
    <nav className={styles['tocnav']}>
      <p className={`${styles['tocnav-title']} dark:text-slate-400`}>Table of contents</p>
      <ul className={styles['tocnav-items']}>
        {items.map((item) => {
          const href = `#${item.id}`
          const active =
            typeof window !== 'undefined' && window.location.hash === href
          return (
            <li key={item.title} className={`my-2 rounded-md py-2 px-8 hover:bg-slate-600/[0.15] dark:hover:bg-slate-400/[0.15] ${active ? 'bg-slate-600/[0.15] dark:bg-slate-400/[0.15]' : ''}`}>
              <Link href={href} passHref legacyBehavior>
                <a className='text-slate-700 no-underline font-medium text-sm dark:text-slate-400'>{item.title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
