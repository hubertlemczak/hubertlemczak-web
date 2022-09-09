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
import skillsbg from '../../../assets/skills-bg.svg';
import Carousel from './Carousel';

const Skills = () => {
  return (
    <div className="relative overflow-hidden max-w-sm lg:max-w-none">
      <h3 className="font-semibold text-2xl text-textHeading dark:text-yellow-600 mb-14 lg:text-4xl lg:mt-2">
        My Skills
      </h3>
      <div className="grid items-center gap-11">
        <div className="flex items-center justify-between">
          <HtmlSVG
            fill="#F0F0F0"
            className="hover:fill-slate-600 transition-all h-10 w-10 xs:h-12 xs:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 xl:h-20 xl:w-20 "
          />
          <CssSVG
            fill="#F0F0F0"
            className="hover:fill-slate-600 transition-all h-10 w-10 xs:h-12 xs:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 xl:h-20 xl:w-20 "
          />
          <JSSVG
            fill="#F0F0F0"
            className="hover:fill-slate-600 transition-all h-10 w-10 xs:h-12 xs:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 xl:h-20 xl:w-20 "
          />
          <TSSVG
            fill="#F0F0F0"
            className="hover:fill-slate-600 transition-all h-10 w-10 xs:h-12 xs:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 xl:h-20 xl:w-20 "
          />
          <NodeJSSVG
            fill="#F0F0F0"
            className="hover:fill-slate-600 transition-all h-10 w-10 xs:h-12 xs:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 xl:h-20 xl:w-20 "
          />
        </div>
        <div className="flex items-center justify-between">
          <ReactSVG
            fill="#F0F0F0"
            className="hover:fill-slate-600 transition-all h-10 w-10 xs:h-12 xs:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 xl:h-20 xl:w-20 "
          />
          <TailwindSVG
            fill="#F0F0F0"
            className="hover:fill-slate-600 transition-all h-10 w-10 xs:h-12 xs:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 xl:h-20 xl:w-20 "
          />
          <ExpressSVG
            fill="#F0F0F0"
            className="hover:fill-slate-600 transition-all h-10 w-10 xs:h-12 xs:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 xl:h-20 xl:w-20 "
          />
          <PrismaSVG
            fill="#F0F0F0"
            className="hover:fill-slate-600 transition-all h-10 w-10 xs:h-12 xs:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 xl:h-20 xl:w-20 "
          />
          <PostgresSVG
            fill="#F0F0F0"
            className="hover:fill-slate-600 transition-all h-10 w-10 xs:h-12 xs:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 xl:h-20 xl:w-20 "
          />
        </div>
      </div>
      <Carousel />
      <img className="absolute top-0 -right- -z-50 " src={skillsbg} alt="" />
    </div>
  );
};

export default Skills;
