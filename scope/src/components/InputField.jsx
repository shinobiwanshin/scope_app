import React, { useState, memo } from "react";

const InputField = memo(({ type, placeholder, icon, value, onChange }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  console.log("InputField rendered with value:", value);

  return (
    <div className="input-wrapper">
      <input
        type={isPasswordShown ? "text" : type}
        placeholder={placeholder}
        className="input-field"
        required
        value={value} // Bind the input value to the passed value prop
        onChange={onChange} // Call the passed onChange function on input change
      />
      {/* <i className="material-symbols-rounded">{icon}</i> */}
      {/* {type === "password" && (
        <i
          onClick={() => setIsPasswordShown((prevState) => !prevState)}
          className="material-symbols-rounded eye-icon"
        >
          {isPasswordShown ? "visibility" : "visibility_off"}
        </i>
      )} */}
    </div>
  );
});

export default InputField;
