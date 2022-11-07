import * as React from 'react'
import { Code } from '../code'

function Request({request}) {
  const methodType = (method) => {
    let type = method != undefined ? method.toLowerCase() : 'default'
    const methods = {
      'get': () => 'method text-white text-blue-400 font-semibold pr-3',
      'post': () => 'method text-white text-success font-semibold pr-3',
      'put': () => 'method text-white text-blue-400 font-semibold pr-3',
      'delete': () => 'method text-white text-danger font-semibold pr-3',
      'default': () => 'method text-white font-semibold pr-3'
    }
    return methods[type]()
  }

  return (
    <p className="request-definition text-sm">
      <span className={methodType(request.method)}>{request.method}</span>
      <span className="path text-white">{request.path}</span>
    </p>
  )
}

export function CodeBlock({ title, subTitle, request, children }) {
  return(
    <div className='code-block bg-prism rounded-lg'>
      <div className='topbar p-10 bg-prism-light rounded-lg rounded-b-none'>
        <div className="topbar-title">
          {title != undefined && (<p className='text-white text-sm font-semibold'>{title}</p>)}
          {subTitle != undefined && (<p className='text-white text-sm'>{subTitle}</p>)}
          {request != undefined && (<Request key='request' request={request} />)}
        </div>
      </div>
      {/* <Code data-language={'json'}> */}
        {children}
      {/* </Code> */}
    </div>
  )
}