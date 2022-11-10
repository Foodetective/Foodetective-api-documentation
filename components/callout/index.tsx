import * as React from 'react';

export function Callout({ title, children }) {
  return (
    <div className='callout flex flex-col p-16 my-16 bg-prism rounded-lg'>
      {title != undefined && (
        <h3 className='font-semibold'>{title}</h3>
      )}
      {children}
    </div>
  );
}
