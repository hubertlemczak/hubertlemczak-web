import { ReactComponent as HtmlSVG } from '../../../assets/html.svg';
import { ReactComponent as CssSVG } from '../../../assets/css.svg';
import { ReactComponent as JSSVG } from '../../../assets/js.svg';
import { ReactComponent as TSSVG } from '../../../assets/ts.svg';
import { ReactComponent as NodeJSSVG } from '../../../assets/nodejs.svg';
import { ReactComponent as ReactSVG } from '../../../assets/react.svg';
import { ReactComponent as TailwindSVG } from '../../../assets/tailwind.svg';
import { ReactComponent as ExpressSVG } from '../../../assets/express.svg';
import { ReactComponent as PrismaSVG } from '../../../assets/prisma.svg';
import { ReactComponent as PostgresSVG } from '../../../assets/postgres.svg';
import SKILLSBG from '../../../assets/skills-bg.svg';

const Skills = () => {
  return (
    <div className="relative max-w-sm lg:max-w-none">
      <h3 className="font-semibold text-2xl text-textHeading dark:text-yellow-600 mb-14 lg:text-4xl lg:mt-2">
        My Skills
      </h3>
      <div className="grid items-center gap-11">
        <div className="flex items-center justify-between">
          <HtmlSVG
            title="HTML"
            aria-label="HTML"
            fill="#FFFFFF"
            className="hover:fill-svgHover transition-all h-10 w-10 xs:h-12 xs:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 xl:h-20 xl:w-20 "
          />
          <CssSVG
            title="CSS"
            aria-label="CSS"
            fill="#FFFFFF"
            className="hover:fill-svgHover transition-all h-10 w-10 xs:h-12 xs:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 xl:h-20 xl:w-20 "
          />
          <JSSVG
            title="JavaScript"
            aria-label="JavaScript"
            fill="#FFFFFF"
            className="hover:fill-svgHover transition-all h-10 w-10 xs:h-12 xs:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 xl:h-20 xl:w-20 "
          />
          <TSSVG
            title="TypeScript"
            aria-label="TypeScript"
            fill="#FFFFFF"
            className="hover:fill-svgHover transition-all h-10 w-10 xs:h-12 xs:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 xl:h-20 xl:w-20 "
          />
          <NodeJSSVG
            title="NodeJs"
            aria-label="NodeJs"
            fill="#FFFFFF"
            className="hover:fill-svgHover transition-all h-10 w-10 xs:h-12 xs:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 xl:h-20 xl:w-20 "
          />
        </div>
        <div className="flex items-center justify-between">
          <ReactSVG
            title="React"
            aria-label="React"
            fill="#FFFFFF"
            className="hover:fill-svgHover transition-all h-10 w-10 xs:h-12 xs:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 xl:h-20 xl:w-20 "
          />
          <TailwindSVG
            title="TailWind"
            aria-label="TailWind"
            fill="#FFFFFF"
            className="hover:fill-svgHover transition-all h-10 w-10 xs:h-12 xs:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 xl:h-20 xl:w-20 "
          />
          <ExpressSVG
            title="Express"
            aria-label="Express"
            fill="#FFFFFF"
            className="hover:fill-svgHover transition-all h-10 w-10 xs:h-12 xs:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 xl:h-20 xl:w-20 "
          />
          <PrismaSVG
            title="Prisma"
            aria-label="Prisma"
            fill="#FFFFFF"
            className="hover:fill-svgHover transition-all h-10 w-10 xs:h-12 xs:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 xl:h-20 xl:w-20 "
          />
          <PostgresSVG
            title="PostgreSQL"
            aria-label="PostgreSQL"
            fill="#FFFFFF"
            className="hover:fill-svgHover transition-all h-10 w-10 xs:h-12 xs:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 xl:h-20 xl:w-20 "
          />
        </div>
      </div>
      <img className="absolute top-0 -right- -z-50 " src={SKILLSBG} alt="" />
    </div>
  );
};

export default Skills;
