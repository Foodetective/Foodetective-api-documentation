import Prism from 'prismjs';
import { useRef, useEffect } from 'react';

export function CodeBlock({children, 'data-language': language}) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) Prism.highlightAll(ref.current, false);
  }, [children]);

  return (
    <div className="relative rounded-lg" aria-live="polite">
      <pre
        ref={ref}
        className={`language-${language}`}
      >
        {children}
      </pre>
    </div>
  );
}
