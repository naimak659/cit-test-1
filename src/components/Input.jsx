import React from "react";

function Input({
  legend,
  type,
  inputData,
  handleOnChange,
  placeholder,
  errorMsg,
  id,
}) {
  return (
    <div>
      <fieldset
        className="border-2 rounded-lg px-8 relative flex items-center justify-between"
        name={type}
      >
        <legend className="pl-4 pr-8 font-semibold font-nunito text-xs text-cs-blue/70">
          {legend}
        </legend>
        <input
          className="w-[497px] px-4 py-3 border-none focus-within:border-0 focus-within:outline-none font-semibold text-xl text-cs-blue placeholder:text-cs-blue/50 font-nunito"
          value={inputData}
          onChange={(e) => {
            handleOnChange(e);
          }}
          name={type}
          id={id}
          type={type}
          placeholder={placeholder}
          //   autoComplete={autoComplete}
        />
      </fieldset>
      <p className="text-warning font-medium text-sm mt-1 font-openSans">
        {errorMsg}
      </p>
    </div>
  );
}

export default Input;
