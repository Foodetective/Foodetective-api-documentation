import React, { useEffect, useRef } from "react";
import { highlightElement } from "prismjs";

export function Code({ children, "data-language": language }) {
  const ref = useRef(null);

  useEffect(() => {
    highlightElement(ref.current, false);
  }, [children]);

  return (
    <div className="code overflow-hidden" aria-live="polite">
      <pre data-language={language} className={`code-pre language-${language}`}>
        <code ref={ref} className={`language-${language}`}>
          {children}
        </code>
      </pre>
    </div>
  );
}
