import React from 'react';
import Link from 'next/link';

export function TopNav({children}) {
  return (
    <nav className='navbar'>
      <div className='navbar-inner'>
        <div className='navbar-items'>
          <Link href="/" className="flex" legacyBehavior>
            Home
          </Link>
        </div>
        <div className='navbar-items'>
          {children}
        </div>
      </div>
      <style jsx>
        {`
          .navbar {
            top: 0;
            position: fixed;
            width: 100%;
            z-index: 100;
            display: flex;
            align-items: center;
            padding: 1rem 2rem;
            background: #0f113b;
            border-bottom: 1px solid var(--border-color);
          }
          .navbar-inner {
            display: flex;
            justify-content: space-between;
            column-gap: 1rem;
            flex-direction: row;
            width: 100%;
          }
          .navbar-items {
            display: flex;
          }
          nav:global(a) {
            text-decoration: none;
            color: #a3acb9;
            font-size: 16px;
            font-weight: 600;
          }
          nav:global(a):hover {
            color: white;
          }
          section {
            display: flex;
            gap: 1rem;
            padding: 0;
          }
        `}
      </style>
    </nav>
  );
}
