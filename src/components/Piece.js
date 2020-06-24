import React from "react";

export default function Piece(props) {
  return (
    <span
      class="dot"
      style={{
        height: "25px",
        width: "25px",
        marginTop: "5px",
        backgroundColor: props.color,
        borderRadius: "50%",
        display: "inline-block",
      }}
    ></span>
  );
}
