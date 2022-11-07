import Prism from 'prismjs';

import * as React from 'react';

export function Code({children, language}) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    Prism.highlightElement(ref.current, false);
  }, [children]);

  return (
    <div className="code" aria-live="polite">
      <pre data-language={language} className={`language-${language}`}>
        <code ref={ref} className={`language-${language}`}>
          {children}
        </code>
      </pre>
    </div>
  );
}