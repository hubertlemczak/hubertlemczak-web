import { ReactComponent as SearchSVG } from '../assets/search.svg';

const BUTTON_INVERTED =
  'text-black dark:text-white font-bold w-48 border border-black dark:border-white hover:shadow-white transition-all hover:shadow-sm ';

const Button = ({
  buttonType,
  buttonContent,
  className,
  children,
  search,
  ...otherProps
}) => {
  return (
    <>
      <button
        className={`${
          buttonType === 'inverted'
            ? BUTTON_INVERTED
            : 'bg-gradient-to-r from-yellow-500 to-red-500 '
        }dark:text-white font-bold w-48 rounded-full py-3 ${className ?? ''}`}
        {...otherProps}
      >
        {buttonContent === 'search' ? (
          <div className="flex justify-center gap-5 items-center">
            <SearchSVG className={`stroke-black dark:stroke-white ${search}`} />

            {children}
          </div>
        ) : (
          { children }
        )}
      </button>
    </>
  );
};

export default Button;
