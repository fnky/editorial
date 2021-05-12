import type { RefObject } from "react";
import { useEffect, useRef } from "react";

type ClickOutsideHandler = (event: MouseEvent | TouchEvent) => void;

export function useOnClickOutside<T extends HTMLElement>(
  ref: RefObject<T>,
  handler: ClickOutsideHandler,
): void {
  const savedCallbackHandler = useRef<ClickOutsideHandler>();

  useEffect(() => {
    savedCallbackHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const target = ref.current;

    const listener = (event: MouseEvent | TouchEvent): void => {
      // Do nothing if clicking ref's element or descendent elements
      if (!target || target.contains(event.target as HTMLElement)) {
        return;
      }

      savedCallbackHandler.current?.(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref]);
}
