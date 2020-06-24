import React from "react";
import Tile from "./Tile";

const renderTile = (i, total) => {
  const x = i % Math.sqrt(total);
  const y = Math.floor(i / Math.sqrt(total));
  const black = (x + y) % 2 === 1;
  return (
    <div key={i}>
      <Tile black={black} />
    </div>
  );
};

export default function Chess(props) {
  const tiles = [];
  const total = props.number * props.number;

  for (let i = 0; i < total; i++) {
    tiles.push(renderTile(i, total));
  }
  return (
    <div
      style={{
        width: props.number * 50,
        height: props.number * 50,
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {tiles}
    </div>
  );
}
