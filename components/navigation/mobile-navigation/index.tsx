import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { NavItem, items } from '../../navigation/side-navigation'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronDown } from '@fortawesome/free-solid-svg-icons'

export function MobileNav({toc}) {
  const [showMenu, setShowMenu] = useState<Boolean>(false)
  const [showToc, setShowToc] = useState<Boolean>(false)

  const tocItems = toc.filter(
    (item) => item.id && (item.level === 1 || item.level === 3)
  )

  return (
    <div className='mobile-nav fixed w-full px-45 lg:hidden border-b bg-white border-slate-300 dark:bg-prism-dark dark:border-slate-700'>
      <div className="menu flex flex-row justify-between w-full">
        <button className='flex flex-row items-center p-5 gap-5' onClick={() => setShowMenu(!showMenu)}>
          <p className='uppercase font-semibold m-0'>menu</p>
          {showMenu ? (
            <FontAwesomeIcon className='text-slate-700 dark:text-slate-400' icon={faChevronDown} size='xs' />
          ) : (
            <FontAwesomeIcon className='text-slate-700 dark:text-slate-400' icon={faChevronLeft} size='xs' />
          )}
        </button>
        <button className='flex flex-row items-center p-5 gap-5' onClick={() => setShowToc(!showToc)}>
          <p className='uppercase font-semibold m-0'>toc</p>
          {showToc ? (
            <FontAwesomeIcon className='text-slate-700 dark:text-slate-400' icon={faChevronDown} size='xs' />
          ) : (
            <FontAwesomeIcon className='text-slate-700 dark:text-slate-400' icon={faChevronLeft} size='xs' />
          )}
        </button>
      </div>
      <div className={`menu-sub w-[250px] max-h-[70vh] overflow-y-scroll rounded-b-lg flex-col absolute bg-white dark:bg-prism p-16 border border-slate-300 dark:border-prism-dark ${showMenu ? 'flex' : 'hidden'}`}>
        {items.map((item, index) => (
          <NavItem key={index} item={item} onClick={() => setShowMenu(!showMenu)}/>
        ))}
      </div>
      <div className={`menu-sub w-[250px] max-h-[70vh] overflow-y-scroll rounded-b-lg flex-col absolute right-50 bg-white border-slate-300 dark:bg-prism p-16 border dark:border-prism-dark ${showToc ? 'flex' : 'hidden'}`}>
        <p className={`font-semibold uppercase m-0 dark:text-slate-400`}>Table of contents</p>
        <ul>
          {tocItems.map((item) => {
            const href = `#${item.id}`
            const active =
              typeof window !== 'undefined' && window.location.hash === href
            return (
              <li 
                key={item.title} 
                className={`my-2 rounded-md py-2 px-8 hover:bg-slate-600/[0.15] dark:hover:bg-slate-400/[0.15] ${active ? 'bg-slate-600/[0.15] dark:bg-slate-400/[0.15]' : ''}`} 
                onClick={() => setShowToc(!showToc)}>
                <Link href={href} passHref legacyBehavior>
                  <a className='text-slate-700 no-underline font-medium text-sm dark:text-slate-400'>{item.title}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  )
}