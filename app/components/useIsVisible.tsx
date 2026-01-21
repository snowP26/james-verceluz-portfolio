import { useEffect, useState } from "react";

export function useIsVisible(ref: any) {
  const [isIntersecting, setIntersecting] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [ref]); // The hook depends on the ref to ensure the observer is set up correctly

  return isIntersecting;
}
