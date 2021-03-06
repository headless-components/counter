import React from 'react';

import useToggle from "../../hc-hooks/useToggle/useToggle";
import './switch.css';

function UiSwitch({ name }) {
  let { toggled, setToggle } = useToggle();

  return (
    <div className={toggled ? "switch-container active" : "switch-container"}>
      <label htmlFor={name} className="switch-label">
        <input
          className="switch-checkbox"
          type="checkbox"
          id={name}
          name={name}
          defaultChecked={toggled}
          onChange={() => setToggle(!toggled)}
        />
      </label>
    </div>
  );
}

export default UiSwitch;