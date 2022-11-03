import * as React from 'react'

export function Section({title, children}) {
    return (
        <div>
            {title != undefined && (
                <h2>{title}</h2>
            )}
            {children}
        </div>
    )
}