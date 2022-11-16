import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

export function List({ title, isChild, children }) {
  const [child, setChild] = useState(false)
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (isChild) {
      setChild(true)
    }
  }, [isChild])

  return (
    <div className={`${child ? `attribute-list-child mt-16 ${show ? 'w-full' : 'w-fit'}` : 'attribute-list mt-16'}`}>
      {child ? (
        <>
          <div className={`attribute-list-label-child bg-prism-light/[0.1] dark:bg-prism-light/[0.4] flex flex-row items-center cursor-pointer px-10 py-5 border-rounded ${show ? 'rounded-b-none' : ''}`} onClick={() => setShow(!show)}>
            {show ? (
              <FontAwesomeIcon className='text-slate-700 dark:text-slate-200' icon={faMinus} size='xs' />
            ) : (
              <FontAwesomeIcon className='text-slate-700 dark:text-slate-200' icon={faPlus} size='xs' />
            )}
            <h5 className='text-sm dark:text-slate-200 pl-10'>Child attributes</h5>
          </div>
          <ul className={`attribute-list-group-child border-rounded rounded-none ${show ? 'block' : 'hidden'}`}>
            {children}
          </ul>
        </>
      ) : (
        <>
          <h5 className='font-bold dark:text-slate-400'>{title}</h5>
          <ul className='attribute-list-group'>
            {children}
          </ul>
        </>
      )}
    </div>
  )
}