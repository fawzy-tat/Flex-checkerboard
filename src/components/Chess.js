import React from "react";
import Tile from "./Tile";
import Piece from "./Piece";

const hasRedPeice = (i, rowSize) => {
  if (i >= 0 && i <= rowSize * 2 - 1) {
    return true;
  } else {
    return false;
  }
};

const hasBlackPeice = (i, rowSize) => {
  const total = Math.pow(rowSize, 2);
  const lastTile = total - 1;
  const BlackStart = lastTile - rowSize * 2;
  if (i >= BlackStart + 1 && i <= lastTile) {
    return true;
  } else {
    return false;
  }
};

const renderTile = (i, total, shape) => {
  const rowSize = Math.sqrt(total);
  const x = i % rowSize;
  const y = Math.floor(i / rowSize);
  const black = (x + y) % 2 === 1;

  const redPiece = hasRedPeice(i, rowSize) ? (
    <Piece color="red" shape={shape}></Piece>
  ) : null;

  const blackPiece = hasBlackPeice(i, rowSize) ? (
    <Piece color="yellow" shape={shape}></Piece>
  ) : null;
  return (
    <div key={i}>
      <Tile black={black}>
        {redPiece} {blackPiece}
      </Tile>
    </div>
  );
};

export default function Chess(props) {
  const tiles = [];
  const total = props.number * props.number;
  const shape = props.shape;
  for (let i = 0; i < total; i++) {
    tiles.push(renderTile(i, total, shape));
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
