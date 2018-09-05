import React from "react";
import Widget from "./Widget";

const NumberWidget = ({ displayText, footerText, color }) => {
  return (
    <Widget
      body={
        <div
          style={{
            color,
            textAlign: "center",
            fontSize: 50
          }}
        >
          {displayText}
        </div>
      }
      footer={
        <div style={{ textAlign: "center", fontWeight: "bold" }}>
          {footerText}
        </div>
      }
    />
  );
};

export default NumberWidget;
