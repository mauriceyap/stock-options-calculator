// We set a minimum loading time to prevent the user from perceiving 'flashing'
// from the graph components in the case of very quick calculations by the

import { useEffect, useRef, useState } from "react";

// browser
const MINIMUM_LOADING_TIME_MS = 500;

export const useDisplayLoading = (loading: boolean) => {
  const [displayLoading, setDisplayLoading] = useState(loading);
  const setLoadingTimeoutRef = useRef<number | null>(null);
  useEffect(() => {
    if (loading) {
      setDisplayLoading(true);
    } else {
      setLoadingTimeoutRef.current = setTimeout(() => {
        setDisplayLoading(false);
      }, MINIMUM_LOADING_TIME_MS);
    }

    return () => {
      if (setLoadingTimeoutRef.current) {
        clearTimeout(setLoadingTimeoutRef.current);
      }
    };
  }, [loading]);

  return displayLoading;
};
