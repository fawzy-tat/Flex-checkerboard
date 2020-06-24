import React from "react";

export default function Tile({ black, children }) {
  const fill = black ? "black" : "white";

  return (
    <div
      style={{
        backgroundColor: fill,
        width: "50px",
        height: "50px",
      }}
    >
      {children}
    </div>
  );
}
