import { useState } from "react";

const InputField = ({ type, placeholder, icon }) => {
  const [username, setUsername] = useState(""); // State to store the username value
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value); // Update the username value
  };

  return (
    <div className="input-wrapper">
      <input
        type={isPasswordShown ? "text" : type}
        placeholder={placeholder}
        className="input-field"
        required
        value={username} // Bind the input value to the username state
        onChange={handleUsernameChange} // Call the handleUsernameChange function on input change
      />
      <i className="material-symbols-rounded">{icon}</i>
      {type === "password" && (
        <i
          onClick={() => setIsPasswordShown((prevState) => !prevState)}
          className="material-symbols-rounded eye-icon"
        >
          {isPasswordShown ? "visibility" : "visibility_off"}
        </i>
      )}
    </div>
  );
};

export default InputField;
