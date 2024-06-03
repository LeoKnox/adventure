import { useState } from "react";
import { roomData } from "./roomData.js";
import { tile } from "./Tile.js";

export default Level = () => {
  const [maxWidth, setMaxWidth] = useState(roomData[0].length - 1);
  const [maxLength, setMaxLength] = useState(roomData.length - 1);
  const [minWidth, setMinWidth] = useState(1);
  const [minLength, setMinLength] = useState(1);
  const moveHero = () => {
    setMaxWidth(maxWidth + 1);
    setMinWidth(minWidth + 1);
  };
  return (
    <>
      <h3>level page</h3>
      <table>
        {roomData.slice(minLength, maxLength).map((y, iy) => (
          <tr>
            {y.slice(minWidth, maxWidth).map((x, ix) => (
              <Tile tileData={x} />
            ))}
          </tr>
        ))}
      </table>
      <button onClick={moveHero}>右</button>
    </>
  );
};
