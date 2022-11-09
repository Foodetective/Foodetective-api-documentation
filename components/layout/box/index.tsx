import * as React from 'react'

export function Box({ children }) {
  return (
    <div className="box flex flex-col gap-10">{children}</div>
  )
}