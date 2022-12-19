import React, { createContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

export const TabContext = createContext("js");

export function Tabs({ labels, children }) {
  const router = useRouter();
  const [currentTab, setCurrentTab] = useState(labels[0]);
  const lang = router.query.lang ?? "js";

  useEffect(() => {
    if (lang) {
      setCurrentTab(lang);
    }
  }, [lang]);

  return (
    <TabContext.Provider value={currentTab}>
      <ul className="tablist" role="tablist">
        {labels.map((label) => (
          <li key={label}>
            <button
              role="tab"
              aria-selected={label === currentTab}
              onClick={() => setCurrentTab(label)}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
      {children}
    </TabContext.Provider>
  );
}
