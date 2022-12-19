import * as React from "react";

export function LayoutTwoCol({ children }) {
  const [first, ...rest] = React.Children.toArray(children);
  return (
    <div className="layout-two-col flex flex-col gap-10 md:flex-row">
      <div className="flex w-full flex-col md:w-[40%]">{first}</div>
      <div className="flex w-full flex-col gap-10 pt-40 md:w-[60%]">{rest}</div>
    </div>
  );
}
