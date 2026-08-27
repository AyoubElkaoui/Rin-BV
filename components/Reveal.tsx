'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/** Voegt .rv-in toe aan elk [data-rv] element zodra het in beeld komt. */
export default function Reveal() {
  const pathname = usePathname();

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll('[data-rv]'));
    if (!nodes.length) return;

    if (typeof IntersectionObserver === 'undefined') {
      nodes.forEach((n) => n.classList.add('rv-in'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('rv-in');
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    );

    nodes.forEach((n) => io.observe(n));
    const fallback = setTimeout(() => nodes.forEach((n) => n.classList.add('rv-in')), 2600);

    return () => {
      io.disconnect();
      clearTimeout(fallback);
    };
  }, [pathname]);

  return null;
}



