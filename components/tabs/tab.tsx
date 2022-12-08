import React from "react";
import { TabContext } from "./tabs";

export function Tab({ label, children }) {
  const currentTab = React.useContext(TabContext);

  if (label !== currentTab) {
    return null;
  }

  return children;
}
