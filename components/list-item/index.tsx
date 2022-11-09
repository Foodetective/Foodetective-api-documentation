import * as React from 'react';

export function ListItem({title, validation, type, children}) {
  const getType = (type: string): string => {
    // switch (type) {
    //   case value:
        
    //     break;
    
    //   default:
    //     break;
    // }
		return type == "Required" ? 'pl-8 text-danger font-bold' : 'pl-8 text-success font-bold'
	}


  return (
    <li className='border-b border-dotted border-slate-300 py-8' aria-live="polite">
      <h3 className='text-xs font-medium pb-6 dark:text-slate-400'>
        <span className='font-bold'>{title}</span>
        {validation && (<span className='pl-6'>{validation}</span>)}
        {type && (<span className={getType(type)}>{type}</span>)}
      </h3>
      {children != undefined && (
        <div className="list-description dark:text-slate-400">
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
    </li>
  );
}