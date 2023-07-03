import React from "react";
import { useEffect, useRef, useState } from "react";


export function useSpinner() {
  const [loadingSpinner, setLoadingSpinner] = useState(true);
  const timerID = useRef(null);

  useEffect(() => {
    timerID.current = setTimeout(() => {
      setLoadingSpinner(() => false);
    }, 400);

    return () => clearTimeout(timerID.current);
  }, [])

  return loadingSpinner;
}
