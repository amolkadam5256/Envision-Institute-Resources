import React from "react";
import ReactDOM from "react-dom";

const Demo = ({ children, onClose }) => {
  return ReactDOM.createPortal(
    <div>
      <div>
        {children}
        <button>Close</button>
      </div>
    </div>,
    document.getElementById("portal-root") // Moves modal outside main app hierarchy
  );
};

export default Demo;
