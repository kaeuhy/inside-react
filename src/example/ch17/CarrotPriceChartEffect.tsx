import { useId, useInsertionEffect } from "react";

interface DynamicStyleInjectorProps {
  rule: string;
}

export function DynamicStyleInjector({ rule }: DynamicStyleInjectorProps) {
  const styleIdSuffix = useId();
  const styleElementId = `dynamic-style-${styleIdSuffix}`;

  useInsertionEffect(() => {
    const oldStyleElement = document.getElementById(styleElementId);
    if (oldStyleElement) {
      oldStyleElement.remove();
    }

    const styleElement = document.createElement("style");
    styleElement.id = styleElementId;
    styleElement.innerHTML = rule;

    document.head.appendChild(styleElement);

    return () => {
      const styleTagToRemove = document.getElementById(styleElementId);
      if (styleTagToRemove) {
        document.head.removeChild(styleTagToRemove);
      }
    };
  }, [rule, styleElementId]);

  return null;
}
