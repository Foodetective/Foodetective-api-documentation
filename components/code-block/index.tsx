import { useRouter } from "next/router";
import React, { useEffect, useMemo, useState, useRef } from "react";
import copy from "copy-to-clipboard";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard, faCheck } from "@fortawesome/free-solid-svg-icons";

let langOptions = [
  { lang: "js", name: "js", selected: true },
  // {lang: 'js', name: 'Node.js', selected: true},
  // {lang: 'py', name: 'Python', selected: false},
  // {lang: 'java', name: 'Java', selected: false},
  // {lang: 'ruby', name: 'Ruby', selected: false},
  // {lang: 'go', name: 'Go', selected: false},
];

function Request({ request }) {
  const methodType = (method) => {
    const methods = {
      GET: () => "method text-white text-blue-400 font-semibold pr-3",
      POST: () => "method text-white text-success font-semibold pr-3",
      PUT: () => "method text-white text-warning font-semibold pr-3",
      PATCH: () => "method text-white text-warning font-semibold pr-3",
      DELETE: () => "method text-white text-danger font-semibold pr-3",
      DEFAULT: () => "method text-white font-semibold pr-3",
    };
    let type = method != undefined && method in methods ? method : "DEFAULT";
    return methods[type]();
  };

  return (
    <p className="request-definition m-0 break-all">
      <span className={methodType(request.method)}>{request.method}</span>
      <span className="path text-white">{request.path}</span>
    </p>
  );
}

export function CodeBlock({ title, subTitle, request, collapsable, children }) {
  const [copied, setCopied] = useState<boolean>(false);
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const ref = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (copied) {
      copy(ref.current.innerText);
      const copyTimeout = setTimeout(setCopied, 1000, false);
      return () => clearInterval(copyTimeout);
    }
  }, [copied]);

  useEffect(() => {
    if (collapsable) {
      setCollapsed(true);
    }
  }, [collapsable]);

  const allowCopy = useMemo(() => {
    if (
      !request &&
      title != undefined &&
      title.toLowerCase() != "response" &&
      collapsable
    )
      return true;
    return false;
  }, [title, request, collapsable]);

  const lang = useMemo(() => {
    return router.query.lang ?? "js";
  }, [router]);

  const options = useMemo(() => {
    const lang = router.asPath.split("?lang=")[1];
    return langOptions.map((itm) => {
      if (itm.lang === lang) {
        itm.selected = true;
        return itm;
      }
      itm.selected = false;
      return itm;
    });
  }, [router.asPath]);

  const setCookie = (name, value, days) => {
    router.push(`${router.route}?lang=${value}`);

    let expires = "";
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path:/";
  };

  return (
    <div
      className={`code-block relative overflow-hidden rounded-lg bg-prism ${
        collapsable ? "pb-40" : ""
      } ${collapsed ? "h-[350px]" : "h-auto"}`}
    >
      <div
        className={`topbar flex ${
          request ? "px-10 py-5" : "p-10"
        } items-center justify-between rounded-lg rounded-b-none bg-prism-light`}
      >
        <div className="topbar-title">
          {title && (
            <p className="m-0 font-semibold text-white dark:text-white">
              {title}
            </p>
          )}
          {subTitle && <p className="m-0  text-white">{subTitle}</p>}
          {request && request.method && (
            <Request key="request" request={request} />
          )}
        </div>
        {request && request.method && (
          <div className="topbar-options flex gap-5">
            <select
              name="langauge-switcher"
              id="langauge-switcher"
              className="cursor-pointer rounded-none bg-prism-light text-right text-sm text-white focus-visible:outline-none"
              value={lang}
              onChange={(e) => setCookie("lang", e.target.value, "")}
            >
              {options
                .sort((a, b) => Number(b.selected) - Number(a.selected))
                .map(({ lang, name, selected }) => (
                  <option
                    key={lang}
                    value={lang}
                    className={
                      selected
                        ? "bg-gray-400 text-white"
                        : "bg-white text-slate-700"
                    }
                    disabled={selected}
                  >
                    {name}
                  </option>
                ))}
            </select>

            {copied ? (
              <button className="cursor-default rounded-md px-8 py-5 text-blue-200">
                <FontAwesomeIcon icon={faCheck} size="1x" />
              </button>
            ) : (
              <button
                className="rounded-md px-10 py-5 text-blue-400 transition-colors delay-75 duration-200 hover:bg-prism-dark/[0.5] hover:text-blue-200"
                onClick={() => setCopied(true)}
              >
                <FontAwesomeIcon icon={faClipboard} size="1x" />
              </button>
            )}
          </div>
        )}
        {!request && allowCopy && (
          <div className="topbar-options flex gap-5">
            {copied ? (
              <button className="cursor-default rounded-md px-8 py-0 text-blue-200">
                <FontAwesomeIcon icon={faCheck} size="1x" />
              </button>
            ) : (
              <button
                className="rounded-md px-10 py-0 text-blue-400 transition-colors delay-75 duration-200 hover:bg-prism-dark/[0.5] hover:text-blue-200"
                onClick={() => setCopied(true)}
              >
                <FontAwesomeIcon icon={faClipboard} size="1x" />
              </button>
            )}
          </div>
        )}
      </div>
      <div ref={ref}>{children}</div>
      {collapsable && (
        <div
          className={`show-more absolute bottom-0 w-full bg-prism ${
            collapsed ? "pt-20" : ""
          }`}
        >
          <button
            className="w-full rounded-lg rounded-t-none bg-prism-light p-8 text-sm text-white"
            onClick={() => setCollapsed(!collapsed)}
          >
            Show {collapsed ? "More" : "Less"}{" "}
          </button>
        </div>
      )}
    </div>
  );
}
