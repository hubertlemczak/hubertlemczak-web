import smoothScrollTo from '../../../utils/smoothScrollTo';

function Sections({ sections, activeId }) {
  return (
    <ul className="">
      {sections.map(section => (
        <li key={section.id} className="text-gray-600 dark:text-textPara">
          <a
            href={'#' + section.id}
            className={`block mb-2 hover:text-black hover:dark:text-white ${
              activeId === section.id &&
              'text-[#cd2875] dark:text-[#e5d544] font-bold hover:text-[#cd2875] dark:hover:text-[#e5d544]'
            }`}
            onClick={e => smoothScrollTo(e, section.id)}
          >
            {section.title}
          </a>
          {section.children.length > 0 && (
            <ul>
              {section.children.map(child => (
                <li key={child.id} className="ml-5">
                  <a
                    href={'#' + child.id}
                    className={`block mb-2 hover:text-black hover:dark:text-white ${
                      activeId === child.id &&
                      'text-[#f41a7e] dark:text-[#e5d544] font-bold hover:text-[#cd2875] dark:hover:text-[#e5d544]'
                    }`}
                    onClick={e => smoothScrollTo(e, child.id)}
                  >
                    {child.title}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}

export default Sections;
