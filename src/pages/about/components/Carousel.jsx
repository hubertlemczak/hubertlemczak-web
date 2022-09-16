import './index.css';
import REACT from '../../../assets/images/react.png';
import EXPRESS from '../../../assets/images/expressjs.png';
import HTML from '../../../assets/images/html.png';
import JS from '../../../assets/images/js.png';
import TS from '../../../assets/images/ts.png';
import NODEJS from '../../../assets/images/nodejs.png';
import POSTGRES from '../../../assets/images/postgres.png';
import PRISMA from '../../../assets/images/prisma.svg';
import STYLED from '../../../assets/images/styled.png';
import TAILWIND from '../../../assets/images/tailwindcss.png';
import CSS from '../../../assets/images/css.png';

const Carousel = () => {
  return (
    <div className="carousel">
      <div className="carousel-track">
        <div className="carousel-item">
          <img src={REACT} alt="" className="h-28" />
        </div>
        <div className="carousel-item">
          <img src={EXPRESS} alt="" className="h-24" />
        </div>
        <div className="carousel-item">
          <img src={HTML} alt="" className="h-24" />
        </div>
        <div className="carousel-item">
          <img src={CSS} alt="" className="h-28" />
        </div>
        <div className="carousel-item">
          <img src={JS} alt="" className="h-24" />
        </div>
        <div className="carousel-item">
          <img src={TS} alt="" className="h-52" />
        </div>
        <div className="carousel-item">
          <img src={NODEJS} alt="" className="h-28" />
        </div>
        <div className="carousel-item">
          <img src={TAILWIND} alt="" className="h-36" />
        </div>
        <div className="carousel-item">
          <img src={PRISMA} alt="" className="h-20" />
        </div>
        <div className="carousel-item">
          <img src={POSTGRES} alt="" className="h-40" />
        </div>
        <div className="carousel-item">
          <img src={STYLED} alt="" className="h-24" />
        </div>
        <div className="carousel-item">
          <img src={REACT} alt="" className="h-28" />
        </div>
        <div className="carousel-item">
          <img src={EXPRESS} alt="" className="h-24" />
        </div>
        <div className="carousel-item">
          <img src={HTML} alt="" className="h-24" />
        </div>
        <div className="carousel-item">
          <img src={CSS} alt="" className="h-28" />
        </div>
        <div className="carousel-item">
          <img src={JS} alt="" className="h-24" />
        </div>
        <div className="carousel-item">
          <img src={TS} alt="" className="h-52" />
        </div>
        <div className="carousel-item">
          <img src={NODEJS} alt="" className="h-28" />
        </div>
        <div className="carousel-item">
          <img src={TAILWIND} alt="" className="h-36" />
        </div>
        <div className="carousel-item">
          <img src={PRISMA} alt="" className="h-20" />
        </div>
        <div className="carousel-item">
          <img src={POSTGRES} alt="" className="h-40" />
        </div>
        <div className="carousel-item">
          <img src={STYLED} alt="" className="h-24" />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
