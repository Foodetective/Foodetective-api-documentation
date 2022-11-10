import * as React from 'react'

export function Section({ children }) {
  return (
    <section className='section flex flex-col gap-10 p-50'>
      {children}
    </section>
  )
}