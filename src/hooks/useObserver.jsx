import { useRef, useEffect } from 'react';

export default function useObserver(setActiveId) {
  const sectionsRef = useRef({});

  useEffect(() => {
    function handleIntersection(intersection) {
      const visibleSections = [];

      sectionsRef.current = intersection.reduce((acc, section) => {
        acc[section.target.id] = section;
        return acc;
      }, sectionsRef.current);

      Object.keys(sectionsRef.current).forEach(key => {
        const section = sectionsRef.current[key];
        if (section.isIntersecting) visibleSections.push(section);
      });

      function getIndexFromId(id) {
        return Object.keys(sectionsRef.current).findIndex(
          heading => heading === id
        );
      }

      if (visibleSections.length === 1) {
        setActiveId(visibleSections[0].target.id);
      } else if (visibleSections.length > 1) {
        const sortedVisibleSections = visibleSections.sort((a, b) => {
          return getIndexFromId(a.target.id) - getIndexFromId(b.target.id);
        });

        setActiveId(sortedVisibleSections[0].target.id);
      }
    }

    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: '-40% 0px -40% 0px',
    });

    document
      .querySelectorAll('section')
      .forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);
}
