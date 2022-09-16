import uniqid from 'uniqid';

const Title = ({ title, className }) => {
  return (
    <h2
      className={`cursor-default select-none max-w-1220 text-7xl dark:text-white font-bold xs:mx-auto xs:text-8xl sm:text-9xl md:text-150 lg:text-200 xl:text-275 ${className}`}
    >
      {title.split('').map(char =>
        char === ' ' ? (
          <br key={uniqid()} />
        ) : (
          <span key={uniqid()} className="opacity-10 hover:opacity-25">
            {char}
          </span>
        )
      )}
    </h2>
  );
};

export default Title;
