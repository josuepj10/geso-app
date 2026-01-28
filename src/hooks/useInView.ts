"use client";

import { useEffect, useRef, useState } from "react";

interface UseInViewOptions extends IntersectionObserverInit {
  once?: boolean;
}

export function useInView<T extends HTMLElement>({
  threshold = 0.4,
  root = null,
  rootMargin = "0px",
  once = true,
}: UseInViewOptions = {}) {
  const ref = useRef<T | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        if (once) observer.disconnect();
      } else if (!once) {
        setIsInView(false);
      }
    }, { threshold, root, rootMargin });

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold, root, rootMargin, once]);

  return { ref, isInView };
}