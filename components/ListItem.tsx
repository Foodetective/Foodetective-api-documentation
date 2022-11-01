import * as React from 'react';

export function ListItem({title, type, children}) {
  const getType = (type: string): string => {
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
          }
          .list-item-label span {
            font-size: 14px;
          }
          .list-item-label-name {
            font-weight: 600;
          }
          .list-description {
            text-shadow: none;
            font-weight: 300;
            min-width: 450px;
            font-size: 14px;
            display: inline-block;
            white-space: nowrap;
            width: 100%;
          }
          .badge-required {
            padding-left: 0.5rem;
            color: #a32c36;
            font-weight: 600;
          }
          .badge-optional {
            padding-left: 0.5rem;
            // color: #a3acb9; 
            color: #7ec67f;
            font-weight: 300;
          }
        `}
      </style>
    </div>
  );
}