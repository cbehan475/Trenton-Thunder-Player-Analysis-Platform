// src/components/TextareaAutosize.jsx
import React, { useEffect, useRef, forwardRef } from 'react';

const TextareaAutosize = forwardRef(function TextareaAutosize(
  { value, onChange, minRows = 1, style = {}, ...rest },
  ref
) {
  const innerRef = useRef(null);
  const combinedRef = (node) => {
    innerRef.current = node;
    if (typeof ref === 'function') ref(node);
    else if (ref && 'current' in ref) ref.current = node;
  };

  useEffect(() => {
    const el = innerRef.current;
    if (!el || !(el instanceof HTMLTextAreaElement)) return;
    const lineHeight = parseFloat(getComputedStyle(el).lineHeight) || 16;
    const minHeight = Math.max(minRows * lineHeight, 0);
    el.style.height = 'auto';
    el.style.height = `${Math.max(el.scrollHeight, minHeight)}px`;
  }, [value, minRows]);

  return (
    <textarea
      {...rest}
      ref={combinedRef}
      value={value}
      onChange={onChange}
      style={{ ...style, overflow: 'hidden', resize: 'none' }}
    />
  );
});

export default TextareaAutosize;
