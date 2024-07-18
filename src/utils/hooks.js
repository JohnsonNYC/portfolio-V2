import { useState, useEffect } from "react";
import { useMediaPredicate as useMediaPredicateLib } from "react-media-hook";

export const useMediaPredicate = (breakpointString) => {
  const [isMobileState, setIsMobileState] = useState();

  var isMobile = useMediaPredicateLib(breakpointString);

  useEffect(() => {
    setIsMobileState(isMobile);
  }, [isMobile]);

  return isMobileState;
};
