import * as React from "react";

export function Heading({ id = "", level = 1, children, className }) {
  return React.createElement(
    `h${level}`,
    {
      id,
      className: ["heading font-bold dark:text-slate-400", className]
        .filter(Boolean)
        .join(" "),
    },
    children
  );
}
