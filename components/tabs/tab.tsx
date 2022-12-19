import React, { useContext } from "react";
import { TabContext } from "./tabs";

export function Tab({ label, children }) {
  const currentTab = useContext(TabContext);

  if (label !== currentTab) {
    return null;
  }

  return children;
}
