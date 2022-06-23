import { useState } from "react";
import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect";

export const useWidth = () => {
  const [width, setWidth] = useState(0);

  useIsomorphicLayoutEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { width };
};
