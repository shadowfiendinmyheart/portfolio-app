import { useState, useEffect, useLayoutEffect } from "react";

const isIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export const useWidth = () => {
  const [width, setWidth] = useState(0);

  isIsomorphicLayoutEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { width };
};
