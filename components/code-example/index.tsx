import * as React from 'react'

export function CodeExample({ title, subTitle, children }) {
  return(
    <div className='code-example bg-prism rounded-lg'>
      <div className='p-10 bg-prism-light rounded-lg rounded-b-none'>
        <p className='text-white font-semibold'>{title}</p>
        <p className='text-white text-xs'>{subTitle}</p>
      </div>
      {children}
    </div>
  )
}