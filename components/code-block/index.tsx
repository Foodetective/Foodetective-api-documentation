import { useRouter } from 'next/router'
import React, {useEffect, useMemo, useState, useRef} from 'react'
import copy from 'copy-to-clipboard'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard, faCheck } from '@fortawesome/free-solid-svg-icons'

let langOptions = [
  {lang: 'js', name: 'Node.js', selected: true},
  {lang: 'py', name: 'Python', selected: false},
  {lang: 'java', name: 'Java', selected: false},
  {lang: 'ruby', name: 'Ruby', selected: false},
  {lang: 'go', name: 'Go', selected: false},
]

function Request({request}) {
  const methodType = (method) => {
    const methods = {
      'GET': () => 'method text-white text-blue-400 font-semibold pr-3',
      'POST': () => 'method text-white text-success font-semibold pr-3',
      'PUT': () => 'method text-white text-warning font-semibold pr-3',
      'PATCH': () => 'method text-white text-warning font-semibold pr-3',
      'DELETE': () => 'method text-white text-danger font-semibold pr-3',
      'DEFAULT': () => 'method text-white font-semibold pr-3'
    }
    let type = method != undefined && method in methods ? method : 'DEFAULT'
    return methods[type]()
  }

  return (
    <p className="request-definition break-all m-0">
      <span className={methodType(request.method)}>{request.method}</span>
      <span className="path text-white">{request.path}</span>
    </p>
  )
}

export function CodeBlock({ title, subTitle, request, children }) {
  const [copied, setCopied] = useState<boolean>(false)
  const ref = useRef(null);
  const router = useRouter()

  useEffect(() => {
    if (copied) {
      copy(ref.current.innerText)
      const copyTimeout = setTimeout(setCopied, 1000, false)
      return () => clearInterval(copyTimeout)
    }
  }, [copied])

  const lang = useMemo(() => {
    return router.query.lang ?? 'js'
  }, [router])

  const options = useMemo(() => {
    const lang = router.asPath.split('?lang=')[1]
    return langOptions.map(itm => {
      if (itm.lang === lang) {
        itm.selected = true
        return itm
      }
      itm.selected = false
      return itm
    })
  }, [lang])

  const setCookie = (name, value, days) => {
    router.push(`${router.route}?lang=${value}`)

    let expires = ""
    if (days) {
      const date = new Date()
      date.setTime(date.getTime() + (days*24*60*60*1000))
      expires = "; expires=" + date.toUTCString()
    }
    document.cookie = name + "=" + (value || "") + expires + "; path:/"
  }

  return(
    <div className='code-block bg-prism rounded-lg'>
      <div className={`topbar flex ${request ? 'px-10 py-5' : 'p-10'} bg-prism-light rounded-lg rounded-b-none justify-between items-center`}>
        <div className="topbar-title">
          {title && (<p className='text-white font-semibold m-0 dark:text-white'>{title}</p>)}
          {subTitle && (<p className='text-white  m-0'>{subTitle}</p>)}
          {(request && request.method) && (<Request key='request' request={request} />)}
        </div>
        {(request && request.method) && (
          <div className="topbar-options flex gap-5">
            <select 
              name="langauge-switcher" 
              id="langauge-switcher" 
              className='bg-prism-light text-white text-sm text-right cursor-pointer rounded-none focus-visible:outline-none' 
              value={lang} 
              onChange={(e) => setCookie('lang', e.target.value, '')}
            >
              {options.sort((a, b) => Number(b.selected) - Number(a.selected)).map(({lang, name, selected}) => (
                <option key={lang} value={lang} className={selected ? 'bg-gray-400 text-white' : 'bg-white text-slate-700'} disabled={selected}>{name}</option>
              ))}
            </select>

            {copied ? (
              <button className='px-8 py-5 rounded-md text-blue-200 cursor-default'>
              <FontAwesomeIcon icon={faCheck} size='1x' />
            </button>
            ) : (
              <button className='px-10 py-5 rounded-md text-blue-400 hover:text-blue-200 hover:bg-prism-dark/[0.5] transition-colors duration-200 delay-75' onClick={() => setCopied(true)}>
                <FontAwesomeIcon icon={faClipboard} size='1x' />
              </button>
            )}
          </div>
        )}
      </div>
      <div ref={ref}>
        {children}
      </div>
    </div>
  )
}