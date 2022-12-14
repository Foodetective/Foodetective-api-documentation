import * as React from "react";

export function ListItem({ title, validation, type, children }) {
  const getType = (type: string): string => {
    return type == "Required"
      ? "pl-8 text-danger font-bold"
      : "pl-8 text-success font-bold";
  };

  return (
    <li
      className="border-b border-dotted border-slate-300 py-14 dark:border-slate-700"
      aria-live="polite"
    >
      <h3 className="break-all text-xs font-medium dark:text-slate-400">
        <span className="font-bold dark:text-slate-300">{title}</span>
        {validation && <span className="pl-6">{validation}</span>}
        {type && <span className={getType(type)}>{type}</span>}
      </h3>
      {children != undefined && (
        <div className="list-description dark:text-slate-400">{children}</div>
      )}
    </li>
  );
}
