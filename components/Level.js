import { useState, useEffect } from "react";
import { roomData } from "./roomData.js";
import { tile } from "./Tile.js";

export default Level = () => {
  //document.getElementById("1x1").getBoundingClientRect.left
  const heroX = 36;
  const heroY = 42;
  const [maxWidth, setMaxWidth] = useState(roomData[0].length - 1);
  const [maxLength, setMaxLength] = useState(roomData.length - 1);
  const [minWidth, setMinWidth] = useState(1);
  const [minLength, setMinLength] = useState(1);
  //const heroLeft= document.getElementById("1x1").getBoundingClientRect.left;
  useEffect(() => {
  let currentLevel = roomData.slice(minLength, maxLength).map((y, iy) => (
    <tr>
      {y.slice(minWidth, maxWidth).map((x, ix) => (
        <Tile tileData={x} position={`${iy}x${ix}`} />
      ))}
    </tr>
  ));
  }, []);

  const moveHero = () => {
    setMaxWidth(maxWidth + 1);
    setMinWidth(minWidth + 1);
  };

  //document.getElementById("1x1").append("人");
  console.log(`id: ${document.getElementById("1x1")}`);

  return (
    <>
      <h3>level page</h3>
      <table>
        {currentLevel}
        <div className="heroTile">
          <td>人</td>
        </div>
      </table>

      <button onClick={moveHero}>右</button>
    </>
  );
};
