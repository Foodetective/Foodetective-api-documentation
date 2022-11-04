import * as React from 'react';
import styles from './index.module.scss'

export function Callout({ title, children }) {
  return (
    <div className={styles['callout']}>
      {title != undefined && (
        <h3>{title}</h3>
      )}
      <h3>Title</h3>
      {children}
    </div>
  );
}
