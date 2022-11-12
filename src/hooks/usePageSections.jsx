import { useEffect, useState } from 'react';

export default function usePageSections() {
  const [sortedSections, setSortedSections] = useState([]);

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    setSortedSections(sortSections(sections));
  }, []);

  return sortedSections;
}

function sortSections(sections) {
  const sortedSections = [];

  for (let section of sections) {
    if (section.dataset.type === 'heading') {
      sortedSections.push({
        id: section.id,
        title: section.dataset.title,
        children: [],
      });

      continue;
    }

    if (section.dataset.type === 'sub-heading') {
      sortedSections[sortedSections.length - 1].children.push({
        id: section.id,
        title: section.dataset.title,
      });

      continue;
    }
  }

  return sortedSections;
}
