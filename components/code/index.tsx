import Prism from 'prismjs';

import * as React from 'react';

export function Code({children, 'data-language': language}) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (ref.current) Prism.highlightElement(ref.current, false);
  }, [children]);

  return (
    <div className="code" aria-live="polite">
      <pre ref={ref} className={`language-json`}>
        {children}
      </pre>
    </div>
  );
}