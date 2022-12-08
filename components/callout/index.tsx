import * as React from "react";

export function Callout({ title, children }) {
  return (
    <div className="callout my-16 flex flex-col rounded-lg bg-prism p-16">
      {title != undefined && <h3 className="font-semibold">{title}</h3>}
      {children}
    </div>
  );
}
