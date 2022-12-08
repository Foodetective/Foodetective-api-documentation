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
    title: 'Addresses',
    links: [
      {href: '/apis/addresses', children: 'Addresses'}
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
      {href: '/apis/businesses/businesses', children: 'Business'},
      {href: '/apis/businesses/cards', children: 'Cards'},
      {href: '/apis/businesses/caterings', children: 'Caterings'},
      {href: '/apis/businesses/claim-as-owner', children: 'Claim as Owner'},
      {href: '/apis/businesses/clients', children: 'Clients'},
      {href: '/apis/businesses/connect-stripe', children: 'Connect Stripe'},
      {href: '/apis/businesses/dashboard', children: 'Dashboard'},
      {href: '/apis/businesses/deliveries', children: 'Deliveries'},
      {href: '/apis/businesses/direct-service-click', children: 'Direct Service Click'},
      {href: '/apis/businesses/disconnect-stripe', children: 'Disconnect Stripe'},
      {href: '/apis/businesses/dishes', children: 'Dishes'},
      {href: '/apis/businesses/external-service-links', children: 'External Service Links'},
      {href: '/apis/businesses/favourite-suppliers', children: 'Favourite Suppliers'},
      {href: '/apis/businesses/guides', children: 'Guides'},
      {href: '/apis/businesses/invoice', children: 'Invoice'},
      {href: '/apis/businesses/members', children: 'Members'},
      {href: '/apis/businesses/orders', children: 'Orders'},
      {href: '/apis/businesses/preferred-partners', children: 'Preferred Partners'},
      {href: '/apis/businesses/payments', children: 'Payments'},
      {href: '/apis/businesses/permitted-list', children: 'Permitted List'},
      {href: '/apis/businesses/privatisations', children: 'Privatisations'},
      {href: '/apis/businesses/reservations', children: 'Reservations'},
      {href: '/apis/businesses/reviews', children: 'Reviews'},
      {href: '/apis/businesses/setup', children: 'Setup'},
      {href: '/apis/businesses/similar', children: 'Similar'},
      {href: '/apis/businesses/subscriptions', children: 'Subscriptions'},
      {href: '/apis/businesses/tables', children: 'Tables'},
      {href: '/apis/businesses/widgets', children: 'Widgets'}
    ],
  },
  {
    title: 'Cards',
    links: [
      {href: '/apis/cards', children: 'Cards'}
    ],
  },
  {
    title: 'Categories',
    links: [
      {href: '/apis/categories', children: 'Categories'}
    ],
  },
  {
    title: 'Caterings',
    links: [
      {href: '/apis/caterings/catering', children: 'Catering'},
      {href: '/apis/caterings/catering-offer', children: 'Catering Offer'}
    ],
  },
  {
    title: 'Cities',
    links: [
      {href: '/apis/cities', children: 'Cities'}
    ],
  },
  {
    title: 'City with countries',
    links: [
      {href: '/apis/city-with-countries', children: 'City With Countries'}
    ],
  },
  {
    title: 'Deliveries',
    links: [
      {href: '/apis/deliveries', children: 'Deliveries'}
    ],
  },
  {
    title: 'Devices',
    links: [
      {href: '/apis/devices', children: 'Devices'}
    ],
  },
  {
    title: 'Dishes',
    links: [
      {href: '/apis/dishes', children: 'Dishes'}
    ],
  },
  {
    title: 'Elements',
    links: [
      {href: '/apis/elements', children: 'Elements'}
    ],
  },
  {
    title: 'External Service Links',
    links: [
      {href: '/apis/external-service-links', children: 'External Service Links'}
    ],
  },
  {
    title: 'External Services',
    links: [
      {href: '/apis/external-services', children: 'External Services'}
    ],
  },
  {
    title: 'Favorite Suppliers',
    links: [
      {href: '/apis/favorite-suppliers', children: 'Favorite Suppliers'}
    ],
  },
  {
    title: 'Favorites',
    links: [
      {href: '/apis/favorites', children: 'Favorites'}
    ],
  },
  {
    title: 'Feedbacks',
    links: [
      {href: '/apis/feedbacks', children: 'Feedbacks'}
    ],
  },
  {
    title: 'Groups',
    links: [
      {href: '/apis/groups', children: 'Groups'}
    ],
  },
  {
    title: 'Guides',
    links: [
      {href: '/apis/guides', children: 'Guides'}
    ],
  },
  {
    title: 'Intelligence Notifications',
    links: [
      {href: '/apis/intelligence-notifications', children: 'Intelligence Notifications'}
    ],
  },
  {
    title: 'Members',
    links: [
      {href: '/apis/members', children: 'Members'}
    ],
  },
  {
    title: 'Menus',
    links: [
      {href: '/apis/menus', children: 'Menus'}
    ],
  },
  {
    title: 'News Posts',
    links: [
      {href: '/apis/news-posts', children: 'News Posts'}
    ],
  },
  {
    title: 'Notifications',
    links: [
      {href: '/apis/notifications', children: 'Notifications'}
    ],
  },
  {
    title: 'Open Periods',
    links: [
      {href: '/apis/open-periods', children: 'Open Periods'}
    ],
  },
  {
    title: 'Order Periods',
    links: [
      {href: '/apis/order-periods', children: 'Order Periods'}
    ],
  },
  {
    title: 'Orders',
    links: [
      {href: '/apis/orders', children: 'Orders'}
    ],
  },
  {
    title: 'Partner Integrations',
    links: [
      {href: '/apis/partner-integrations/partner', children: 'Partner'},
      {href: '/apis/partner-integrations/orkestro', children: 'Orkestro'},
      {href: '/apis/partner-integrations/uber-eats', children: 'Uber Eats'}
    ],
  },
  {
    title: 'Partners',
    links: [
      {href: '/apis/partners', children: 'Partners'}
    ],
  },
  {
    title: 'Payments',
    links: [
      {href: '/apis/payments', children: 'Payments'}
    ],
  },
  {
    title: 'Pictures',
    links: [
      {href: '/apis/pictures', children: 'Pictures'}
    ],
  },
  {
    title: 'Preferred Partners',
    links: [
      {href: '/apis/preferred-partners', children: 'Preferred Partners'}
    ],
  },
  {
    title: 'Privatisations',
    links: [
      {href: '/apis/privatisations', children: 'Privatisations'}
    ],
  },
  {
    title: 'Products',
    links: [
      {href: '/apis/products', children: 'Products'}
    ],
  },
  {
    title: 'Referrals',
    links: [
      {href: '/apis/referrals', children: 'Referrals'}
    ],
  },
  {
    title: 'Reservations',
    links: [
      {href: '/apis/reservations', children: 'Reservations'}
    ],
  },
  {
    title: 'Reviews',
    links: [
      {href: '/apis/reviews', children: 'Reviews'}
    ],
  },
  {
    title: 'Specializations',
    links: [
      {href: '/apis/specializations', children: 'Specializations'}
    ],
  },
  {
    title: 'Static Pages',
    links: [
      {href: '/apis/static-pages', children: 'Static Pages'}
    ],
  },
  {
    title: 'Stripe Plans',
    links: [
      {href: '/apis/stripe-plans', children: 'Stripe Plans'}
    ],
  },
  {
    title: 'Stripe Products',
    links: [
      {href: '/apis/stripe-products', children: 'Stripe Products'}
    ],
  },
  {
    title: 'Subscriptions',
    links: [
      {href: '/apis/subscriptions', children: 'Subscriptions'}
    ],
  },
  {
    title: 'Supplier',
    links: [
      {href: '/apis/supplier/categories', children: 'Categories'},
      {href: '/apis/supplier/elements', children: 'Elements'},
      {href: '/apis/supplier/orders', children: 'Orders'},
      {href: '/apis/supplier/product-categories', children: 'Product Categories'}
    ],
  },
  {
    title: 'Tables',
    links: [
      {href: '/apis/tables', children: 'Tables'}
    ],
  },
  {
    title: 'Team Members',
    links: [
      {href: '/apis/team-members', children: 'Team Members'}
    ],
  },
  {
    title: 'Users',
    links: [
      {href: '/apis/users/user', children: 'Users'},
      {href: '/apis/users/current-user', children: 'Current User'},
      {href: '/apis/users/detectives', children: 'Detectives'}
    ],
  },
  {
    title: 'Widgets',
    links: [
      {href: '/apis/widgets', children: 'Widgets'}
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
  }, [hasActive, router.pathname])

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
    <nav className={`${styles['sidenav']} hidden w-[280px] p-20 overflow-y-auto sticky ${className ? className : ''}`}>
      {items.map((item, index) => (
        <NavItem key={index} item={item}/>
      ))}
    </nav>
  );
}
