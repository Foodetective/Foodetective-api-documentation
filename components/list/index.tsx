import React from 'react'

export function List({ title, children }) {
  return (
    <div className='attribute-list mt-16'>
      <h5 className='font-bold dark:text-slate-400'>{title}</h5>
      <ul className='attribute-list-group'>
        {children}
      </ul>
    </div>
  )
}