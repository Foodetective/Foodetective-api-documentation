import * as React from 'react';

export function Callout({ title, children }) {
  return (
    <div className="flex flex-col py-6 px-4 rounded-lg bg-slate-200">
      <strong>{title}</strong>
      <span>{children}</span>
    </div>
  );
}
