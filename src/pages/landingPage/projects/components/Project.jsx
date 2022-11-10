import { useNavigate } from 'react-router-dom';
import uniqid from 'uniqid';

import Button from '../../../../components/Button';

const Project = ({
  reverse,
  title,
  tools,
  theme,
  description,
  image,
  path,
}) => {
  const navigate = useNavigate();
  return (
    <div
      className={`relative flex flex-col p-5 max-w-sm bg-white dark:bg-darkBG rounded-2xl mb-24 lg:p-0 lg:grid lg:grid-flow-col lg:grid-cols-2 lg:bg-inherit dark:lg:bg-inherit lg:max-w-full lg:h-620 ${
        reverse && 'lg:justify-items-end'
      }`}
    >
      <img
        className={`lg:absolute lg:h-full ${
          reverse ? 'lg:order-2 lg:left-1/2 lg:ml-16' : 'lg:right-1/2 lg:mr-16'
        }`}
        src={image}
        alt=""
      />
      {!reverse && <p></p>}
      <div className="lg:max-w-xl">
        <h3
          className={`font-bold text-4xl dark:text-textHeading mt-7 mb-2 lg:text-5xl lg:mt-0 lg:mb-4 ${
            reverse && 'lg:text-right'
          }`}
        >
          {title}
        </h3>
        <ul
          className={`flex flex-wrap gap-3 mb-7 max-w-fit ${
            reverse && 'lg:ml-auto'
          }`}
        >
          {tools.map(tool => (
            <li
              key={uniqid()}
              className={`rounded-full text-sm font-bold text-black ${theme} px-3 py-1`}
            >
              {tool}
            </li>
          ))}
        </ul>
        <p
          className={`dark:text-textPara leading-8 lg:text-22 lg:leading-10 ${
            reverse && 'lg:text-right'
          }`}
        >
          {description}
        </p>
        <div
          className={`flex justify-center mt-10 mb-2  ${
            reverse ? 'lg:justify-end' : 'lg:justify-start'
          }`}
        >
          <Button
            buttonContent="search"
            buttonType="inverted"
            onClick={() => {
              navigate(`projects/${path}`);
            }}
          >
            View Project
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Project;
