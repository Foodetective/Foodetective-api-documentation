import React, { useEffect, useState } from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronDown } from '@fortawesome/free-solid-svg-icons'

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
      {href: '/apis/businesses/privatization', children: 'Privatization'},
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

interface navItemProps {
  item: {
    title: string
    links: {
        href: string
        children: string
    }[]
  }
}

export const NavItem: React.FC<navItemProps> = ({item}) => {
  const [show, setShow] = useState<Boolean>(true)
  const router = useRouter();
  const hasActive = item.links.some(itm => itm.href === router.pathname)

  useEffect(() => {
    if (hasActive) {
      setShow(true)
    }
  }, [router.pathname])

  const hide = (): void => {
    setShow(!show)
  } 

  return (
    <div key={item.title} className={`sidenav-sub ${show ? 'show' : ''}`}>
      <div className='sidenav-sub-title' onClick={() => hide()}>
        <p>{item.title}</p>
        {show ? (
          <FontAwesomeIcon icon={faChevronDown} size='xs' />
        ) : (
          <FontAwesomeIcon icon={faChevronLeft} size='xs' />
        )}
      </div>
      <ul className="flex column ">
        {item.links.map((link) => {
          const active = router.pathname === link.href;
          return (
            <li key={link.href} className={active ? 'active' : ''}>
              <Link {...link} legacyBehavior>
                <a href={link.href}>{link.children}</a>
              </Link>
            </li>
          )
        })}
      </ul>
      <style jsx>
        {`
          .sidenav-sub:first-child {
            padding-top: 0px;
          }
          .sidenav-sub {
            color: #43485e;
            overflow: hidden;
            height: auto;
            margin: 0.5rem 0;
          }
          .sidenav-sub ul {
            height: 0;
          }
          .sidenav-sub.show ul {
            height: auto;
            padding-bottom: 10px;
          }
          .sidenav-sub-title {
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .sidenav-sub-title svg {
            color: #43485e;
          }
          .sidenav-sub-title p {
            font-size: 14px;
            margin: 0;
            text-transform: uppercase;
            font-weight: 600;
          }
          span {
            font-size: 14px;
            text-transform: uppercase;
            font-weight: 600;
            padding: 0.5rem 0 0.5rem;
            cursor: pointer;
          }
          ul {
            padding: 0;
            margin: 0;
          }
          li {
            list-style: none;
            margin: 0.2rem 0;
          }
          li:hover {
            background-color: rgba(141, 151, 161, 0.15);
            border-radius: 6px;
          }
          li a {
            text-decoration: none;
            color: #57575a;
            font-weight: 500;
            font-size: 14px;
            padding: 0.5rem 0.6rem;
          }
          li a:hover {
            color: #57575a;
          }
          li.active {
            background-color: rgba(141, 151, 161, 0.15);
            border-radius: 6px;
          }
          li.active > a {
            color: #4c68ff;
          }
        `}
      </style>
    </div>
  )
}

export function SideNav() {
  const router = useRouter();

  return (
    <nav className="sidenav">
      {items.map((item, index) => (
        <NavItem key={index} item={item}/>
      ))}
      <style jsx>
        {`
          nav {
            position: sticky;
            top: var(--top-nav-height);
            height: calc(100vh - var(--top-nav-height));
            flex: 0 0 auto;
            overflow-y: auto;
            padding: 1.5rem;
            background-color: #fbfcfd;
            // border-right: 1px solid var(--border-color);
          }
        `}
      </style>
    </nav>
  );
}
