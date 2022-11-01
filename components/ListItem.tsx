import * as React from 'react';

export function ListItem({children}) {

  return (
    <div aria-live="polite">
      <div className="text">
        {children}
      </div>
      <style jsx>
        {`
          .text {
            text-shadow: none;
            min-width: 100%;
            font-size: 14px;
            display: inline-block;
            white-space: nowrap;
            border-bottom: 0.5px dotted grey;
            width: 500px;
          }
        `}
      </style>
    </div>
  );
}