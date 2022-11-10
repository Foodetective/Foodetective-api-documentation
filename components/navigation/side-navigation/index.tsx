import React, { useEffect, useState } from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';
import styles from './index.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronDown } from '@fortawesome/free-solid-svg-icons'

export const items = [
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
  },
  onClick?: () => void
}

export const NavItem: React.FC<navItemProps> = ({item, onClick}) => {
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
    <div key={item.title} className={`transition-all delay-75 duration-200`}>
      <div className='flex items-center justify-between cursor-pointer font-semibold uppercase' onClick={() => hide()}>
        <p className='font-bold m-0 dark:text-slate-400'>{item.title}</p>
        {show ? (
          <FontAwesomeIcon className='text-slate-700 dark:text-slate-400' icon={faChevronDown} size='xs' />
        ) : (
          <FontAwesomeIcon className='text-slate-700 dark:text-slate-400' icon={faChevronLeft} size='xs' />
        )}
      </div>
      <ul className={`${show ? 'h-auto pb-10' : 'h-0 overflow-hidden'}`}>
        {item.links.map((link) => {
          const active = router.pathname === link.href;
          return (
            <li key={link.href} className={`my-2 rounded-md py-2 px-8 hover:bg-slate-600/[0.15] dark:hover:bg-slate-400/[0.15] ${active ? 'bg-slate-600/[0.15] dark:bg-slate-400/[0.15]' : ''}`} onClick={() => onClick?.()}>
              <Link {...link} legacyBehavior>
                <a className='text-slate-700 no-underline font-medium text-sm wra dark:text-slate-400'>{link.children}</a>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export function SideNav({className}) {
  return (
    <nav className={`${styles['sidenav']} ${className ? className : ''}`}>
      {items.map((item, index) => (
        <NavItem key={index} item={item}/>
      ))}
    </nav>
  );
}
