import * as React from 'react'

export function LayoutTwoCol({ children }) {
	const [first, ...rest] = React.Children.toArray(children)
  console.log(children, first, ...rest)
	return (
		<div className="layout-two-col flex flex-row gap-10 p-50">
			<div className="flex flex-col w-[40%] gap-10">{first}</div>
			<div className="flex flex-col w-[60%] gap-10">{rest}</div>
		</div>
	)
}