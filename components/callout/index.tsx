import * as React from 'react';

export function Callout({ title, children }) {
  return (
    <div className="callout">
      <strong>{title}</strong>
      <span>{children}</span>
      <style jsx>
        {`
          .callout {
            display: flex;
            flex-direction: column;
            padding: 12px 16px;
            background: #1a1f36;
            border: 1px solid #1a1f36;
            border-radius: 4px;
            color: #fbfcfd;
          }
          .callout :global(p) {
            margin: 0;
          }
        `}
      </style>
    </div>
  );
}