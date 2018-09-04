import React from "react";

const CenterWrapper = ({ height = 100, children }) => {
  return (
    <div
      style={{ height }}
      className="d-flex justify-content-center align-items-center"
    >
      {children}
    </div>
  );
};

export default CenterWrapper;
