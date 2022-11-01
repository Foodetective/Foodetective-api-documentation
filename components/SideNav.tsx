import React from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';

const items = [
  {
    title: 'Get started',
    links: [
      {href: '/authentication', children: 'Authentication Guide'},
      {href: '/requestaccess', children: 'Request Access'},
      {href: '/foodetectiveuniversalapi', children: 'Universal API'},
      {href: '/errors', children: 'Errors'},
    ],
  },
  {
    title: 'Banners',
    links: [
      {href: '/apis/banners', children: 'Banners'}
    ],
  },
  {
    title: 'Blog posts',
    links: [
      {href: '/apis/blog-posts', children: 'Blog posts'}
    ],
  },
  {
    title: 'Bookings',
    links: [
      {href: '/apis/bookings', children: 'Bookings'}
    ],
  },
  {
    title: 'Businesses',
    links: [
      {href: '/apis/businesses/cards', children: 'Cards'},
      {href: '/apis/businesses/catering', children: 'Catering'},
      {href: '/apis/businesses/clients', children: 'Clients'},
      {href: '/apis/businesses/dashboard', children: 'Dashboard'},
      {href: '/apis/businesses/deliveries', children: 'Deliveries'},
      {href: '/apis/businesses/dishes', children: 'Dishes'},
      {href: '/apis/businesses/external', children: 'External'},
      {href: '/apis/businesses/favourite-suppliers', children: 'Favourite Suppliers'},
      {href: '/apis/businesses/guides', children: 'Guides'},
      {href: '/apis/businesses/invoice', children: 'Invoice'},
      {href: '/apis/businesses/members', children: 'Members'},
      {href: '/apis/businesses/orders', children: 'Orders'},
      {href: '/apis/businesses/partners', children: 'Partners'},
      {href: '/apis/businesses/payments', children: 'Payments'},
      {href: '/apis/businesses/privitisation', children: 'Privitisation'},
      {href: '/apis/businesses/reservations', children: 'Reservations'},
      {href: '/apis/businesses/reviews', children: 'Reviews'},
      {href: '/apis/businesses/setup', children: 'Setup'},
      {href: '/apis/businesses/similar', children: 'Similar'},
      {href: '/apis/businesses/subscriptions', children: 'Subscriptions'},
      {href: '/apis/businesses/tables', children: 'Tables'}
    ],
  },
  {
    title: 'Categories',
    links: [
      {href: '/apis/categories', children: 'Categories'}
    ],
  },
  {
    title: 'Cities',
    links: [
      {href: '/apis/cities', children: 'Cities'}
    ],
  },
];

export function SideNav() {
  const router = useRouter();

  return (
    <nav className="sidenav">
      {items.map((item) => (
        <div key={item.title} className="sidenav-sub">
          <span>{item.title}</span>
          <ul className="flex column">
            {item.links.map((link) => {
              const active = router.pathname === link.href;
              return (
                <li key={link.href} className={active ? 'active' : ''}>
                  <Link {...link} legacyBehavior>
                    <a href={link.href}>{link.children}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
      <style jsx>
        {`
          nav {
            position: sticky;
            top: var(--top-nav-height);
            height: calc(100vh - var(--top-nav-height));
            flex: 0 0 auto;
            overflow-y: auto;
            padding: 2rem;
            border-right: 1px solid var(--border-color);
          }
          .sidenav {
            width: 225px
          }
          .sidenav-sub:first-child {
            padding-top: 0px;
          }
          .sidenav-sub {
            padding-top: 20px;
          }
          span {
            font-size: 16px;
            text-transform: uppercase;
            font-weight: 600;
            padding: 0.5rem 0 0.5rem;
          }
          ul {
            padding: 0;
            margin: 0.5rem 0;
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
          li.active > a {
            color: white;
          }
        `}
      </style>
    </nav>
  );
}
