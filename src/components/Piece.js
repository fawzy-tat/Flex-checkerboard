import React from "react";

export default function Piece(props) {
  console.log(props);

  return (
    <span
      style={{
        height: "25px",
        width: "25px",
        marginTop: "5px",
        backgroundColor: props.color,
        borderRadius: props.shape === "circle" ? "50%" : "0",
        display: "inline-block",
      }}
    ></span>
  );
}
