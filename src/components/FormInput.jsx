const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="relative">
      <input
        {...otherProps}
        className="rounded-md p-4 text-2xl dark:text-textPara w-full border-none my-4 dark:bg-darkBG focus:outline-none peer"
      />
      {label && (
        <label
          className={`select-none text-2xl absolute left-3 top-8 transition-all duration-300 dark:text-textPara peer-focus:-top-3 peer-focus:text-base ${
            otherProps?.value?.length && '-top-3 text-base'
          }`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
