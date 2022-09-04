import { ReactComponent as SearchSVG } from '../assets/search.svg';

const BUTTON_INVERTED = 'text-white font-bold w-48 border ';

const Button = ({ buttonType, buttonContent, otherProps, children }) => {
  return (
    <>
      <button
        className={`${
          buttonType === 'inverted'
            ? BUTTON_INVERTED
            : 'bg-gradient-to-r from-orange-800 to-purple-900 '
        }text-white font-bold w-48 rounded-full py-3`}
        {...otherProps}
      >
        {buttonContent === 'search' ? (
          <div className="flex justify-center gap-5 items-center">
            <SearchSVG />

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
