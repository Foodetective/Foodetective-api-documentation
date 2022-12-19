import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { NavItem, items } from "@/components";

export function MobileNav({ toc }) {
  const [showMenu, setShowMenu] = useState<Boolean>(false);
  const [showToc, setShowToc] = useState<Boolean>(false);

  const tocItems = toc.filter(
    (item) => item.id && (item.level === 1 || item.level === 3)
  );

  return (
    <div className="mobile-nav fixed w-full border-b border-slate-300 bg-white px-45 dark:border-slate-700 dark:bg-prism-dark lg:hidden">
      <div className="menu flex w-full flex-row justify-between">
        <button
          className="flex flex-row items-center gap-5 p-5"
          onClick={() => setShowMenu(!showMenu)}
        >
          <p className="m-0 font-semibold uppercase">menu</p>
          {showMenu ? (
            <FontAwesomeIcon
              className="text-slate-700 dark:text-slate-400"
              icon={faChevronDown}
              size="xs"
            />
          ) : (
            <FontAwesomeIcon
              className="text-slate-700 dark:text-slate-400"
              icon={faChevronLeft}
              size="xs"
            />
          )}
        </button>
        <button
          className="flex flex-row items-center gap-5 p-5"
          onClick={() => setShowToc(!showToc)}
        >
          <p className="m-0 font-semibold uppercase">toc</p>
          {showToc ? (
            <FontAwesomeIcon
              className="text-slate-700 dark:text-slate-400"
              icon={faChevronDown}
              size="xs"
            />
          ) : (
            <FontAwesomeIcon
              className="text-slate-700 dark:text-slate-400"
              icon={faChevronLeft}
              size="xs"
            />
          )}
        </button>
      </div>
      <div
        className={`menu-sub absolute max-h-[70vh] w-[250px] flex-col overflow-y-scroll rounded-b-lg border border-slate-300 bg-white p-16 dark:border-prism-dark dark:bg-prism ${
          showMenu ? "flex" : "hidden"
        }`}
      >
        {items.map((item, index) => (
          <NavItem
            key={index}
            item={item}
            onClick={() => setShowMenu(!showMenu)}
          />
        ))}
      </div>
      <div
        className={`menu-sub absolute right-50 max-h-[70vh] w-[250px] flex-col overflow-y-scroll rounded-b-lg border border-slate-300 bg-white p-16 dark:border-prism-dark dark:bg-prism ${
          showToc ? "flex" : "hidden"
        }`}
      >
        <p className={`m-0 font-semibold uppercase dark:text-slate-400`}>
          Table of contents
        </p>
        <ul>
          {tocItems.map((item) => {
            const href = `#${item.id}`;
            const active =
              typeof window !== "undefined" && window.location.hash === href;
            return (
              <li
                key={item.title}
                className={`my-2 rounded-md py-2 px-8 hover:bg-slate-600/[0.15] dark:hover:bg-slate-400/[0.15] ${
                  active ? "bg-slate-600/[0.15] dark:bg-slate-400/[0.15]" : ""
                }`}
                onClick={() => setShowToc(!showToc)}
              >
                <Link href={href} passHref legacyBehavior>
                  <a className="text-sm font-medium text-slate-700 no-underline dark:text-slate-400">
                    {item.title}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
