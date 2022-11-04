import * as React from 'react';

export function ListItem({title, type, children}) {
  const getType = (type: string): string => {
    // switch (type) {
    //   case value:
        
    //     break;
    
    //   default:
    //     break;
    // }
		return type == "Required" ? 'pl-8 text-[#a32c36] font-bold' : 'pl-8 text-[#7ec67f] font-bold'
	}


  return (
    <div className='border-b border-dotted border-slate-300' aria-live="polite">
      <p className='text-sm font-medium my-6'>
        <span>{title}</span>
        <span className={getType(type)}>{type}</span>
      </p>
      {children != undefined && (
        <div className="list-description">
          {children}
        </div>
      )}
      <style jsx>
        {`
          .list-description {
            text-shadow: none;
            font-weight: 500;
            min-width: 450px;
            font-size: 14px;
            width: 100%;
          }
        `}
      </style>
    </div>
  );
}