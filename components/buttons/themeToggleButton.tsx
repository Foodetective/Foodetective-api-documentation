import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const themes = ["light", "dark"];

export default function ThemeToggle() {
  const [isMounted, setIsMounted] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
      return localStorage.getItem("theme");
    }
    if (typeof window !== "undefined") {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "dark";
      }
    }
    return "light";
  });

  const toggleTheme = () => {
    const t = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", t);
    setTheme(t);
  };

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.remove("dark");
      root.classList.add("light");
    } else {
      root.classList.remove("light");
      root.classList.add("dark");
    }
  }, [theme]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted ? (
    <div className="inline-flex w-55 items-center justify-between rounded-3xl bg-slate-600/[0.15] p-[1px] dark:bg-slate-400/[0.15]">
      {themes.map((t) => {
        const checked = t === theme;
        return (
          <button
            key={t}
            className={`${
              checked ? "bg-white" : ""
            } flex cursor-pointer items-center rounded-3xl p-2`}
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {t === "light" ? (
              <FontAwesomeIcon
                className={checked ? "p-2 text-tertiary" : "p-2 text-slate-400"}
                icon={faSun}
                size="1x"
              />
            ) : (
              <FontAwesomeIcon
                className={
                  checked ? "w-16 p-2 text-tertiary" : "w-16 p-2 text-slate-400"
                }
                icon={faMoon}
                size="1x"
              />
            )}
          </button>
        );
      })}
    </div>
  ) : (
    <div />
  );
}
