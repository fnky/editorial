import { useCallback, useEffect, useRef } from "react";

/**
 * Takes a list of callbacks and returns a new callback that will call all given
 * callbacks in sequence.
 *
 * @param callbacks List of callbacks
 */
export default function useCombinedCallback<T extends (...args: any[]) => any>(
  ...callbacks: T[]
): (...args: Parameters<T>) => void {
  const callbacksRef = useRef<T[]>();

  useEffect(() => {
    callbacksRef.current = callbacks;
  }, [callbacks]);

  const combinedCallback = useCallback((...args: any[]) => {
    if (callbacksRef.current) {
      for (const callback of callbacksRef.current) {
        callback(...args);
      }
    }
  }, []);

  return combinedCallback;
}
