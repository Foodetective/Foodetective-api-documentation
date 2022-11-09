import React from 'react';
import Link from 'next/link';
import styles from './index.module.scss'

export function Logo() {
  return (
    <>
      <div className={styles['logo']}>
        <a className={styles['logo-link']} href="/en/">
          <div className={styles['logo-image']}>
            <svg width="1em" height="1em" viewBox="42.51 38.52 10 59" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line className={styles['svg-fork-cls-1']} x1="44.51" y1="53.1" x2="44.51" y2="61.36"></line>
              <line className={styles['svg-fork-cls-1']} x1="49.81" y1="53.1" x2="49.81" y2="61.36"></line>
              <path className={styles['svg-fork-cls-2']} d="M51.33,78.41a18.87,18.87,0,1,0-7.74.19"></path>
              <path className={styles['svg-fork-cls-3']} d="M38.82,52.39v7.75c0,7.33,4.81,8.75,4.81,8.75v19s-.05,3.92,3.53,3.92,3.42-3.92,3.42-3.92v-19s4.82-1.42,4.82-8.75V52.39"></path>
            </svg>
          </div>
          <p className={styles['logo-title']}>Foodetective Business</p>
        </a>
      </div>
    </>
  )
}

export function TopNav({ children }) {
  return (
    <nav className={`${styles['navbar']} dark:bg-prism`}>
      <div className={styles['navbar-inner']}>        
        <div className={styles['navbar-items']}>
          <Logo />
          <Link href="/" className="flex" legacyBehavior>
            Home
          </Link>
        </div>
        <div className={styles['navbar-items']}>
          {children}
        </div>
      </div>
    </nav>
  );
}
