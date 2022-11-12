import { useState } from 'react';

import useObserver from '../../hooks/useObserver';
import usePageSections from '../../hooks/usePageSections';
import Sections from './components/Sections';

const Contents = () => {
  const [activeId, setActiveId] = useState();

  const sections = usePageSections();
  useObserver(setActiveId);

  return (
    <aside className="sticky top-52 hidden lg:block flex-shrink-0 w-64 h-max text-sm space-y-2">
      <Sections {...{ activeId, sections }} />
    </aside>
  );
};

export default Contents;
