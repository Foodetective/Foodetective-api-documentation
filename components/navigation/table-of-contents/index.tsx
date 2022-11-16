import React from 'react';
import Link from 'next/link';
import styles from './index.module.scss'

export function TableOfContents({className, toc}) {
  const items = toc.filter(
    (item) => item.id && (item.level === 1 || item.level === 3)
  )

  if (items.length < 1) {
    return null
  }

  return (
    <nav className={`${styles['tocnav']} hidden w-[280px] p-20 overflow-y-auto sticky ${className ? className : ''}`}>
      <p className={`font-semibold uppercase dark:text-slate-400`}>Table of contents</p>
      <ul>
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
