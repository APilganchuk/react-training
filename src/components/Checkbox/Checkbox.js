import { useState } from "react";

export default function Checkbox({ changeTheme }) {
  const [checkbox, setCheckbox] = useState(false);

  const toggleCheckbox = (e) => {
    setCheckbox(e.currentTarget.checked);
    changeTheme(checkbox);
  };

  return (
    <label className="switch">
      <input
        onChange={toggleCheckbox}
        checked={checkbox}
        type="checkbox"
      ></input>
      <span className="slider round"></span>
    </label>
  );
}
