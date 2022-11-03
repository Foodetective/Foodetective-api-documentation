import * as React from 'react';

export function ListItem({title, type, children}) {
  const getType = (type: string): string => {
    // switch (type) {
    //   case value:
        
    //     break;
    
    //   default:
    //     break;
    // }
		return type == "Required" ? 'badge-required' : 'badge-optional'
	}

  return (
    <div className='list-item' aria-live="polite">
      <h3 className='list-item-label'>
        <span className='list-item-label-name'>{title}</span>
        <span className={getType(type)}>{type}</span>
      </h3>
      {children != undefined && (
        <div className="list-description">
          {children}
        </div>
      )}
      <style jsx>
        {`
          .list-item {
            margin: 0.5rem 0;
            border-bottom: 0.5px dotted grey;
          }
          .list-item-label {
            margin: 0.5rem 0;
            font-size: 16px;
            font-weight: 400;
          }
          .list-item-label span {
            font-size: 14px;
          }
          .list-item-label-name {
            font-weight: 400;
          }
          .list-description {
            text-shadow: none;
            font-weight: 500;
            min-width: 450px;
            font-size: 14px;
            width: 100%;
          }
          .badge-required {
            padding-left: 0.5rem;
            color: #a32c36;
            font-weight: 700;
          }
          .badge-optional {
            padding-left: 0.5rem;
            // color: #a3acb9; 
            color: #7ec67f;
            font-weight: 500;
          }
        `}
      </style>
    </div>
  );
}