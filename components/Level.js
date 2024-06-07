import { useState, useRef, useEffect } from "react";
import { roomData } from "./roomData.js";
import { tile } from "./Tile.js";

export default Level = () => {
  //document.getElementById("1x1").getBoundingClientRect.left
  const heroX = 36;
  const heroY = 42;
  const [xyz, setXyz] = useState(111);
  const [maxWidth, setMaxWidth] = useState(roomData[0].length - 1);
  const [maxLength, setMaxLength] = useState(roomData.length - 1);
  const [minWidth, setMinWidth] = useState(1);
  const [minLength, setMinLength] = useState(1);
  const heroPos = useRef();
  useEffect(() => {
    if (heroPos.current) {
      console.log("t" + heroPos.current.offsetLeft);
      setXyz({
        x: heroPos.current.offsetLeft,
        y: heroPos.current.offsetTop,
        width: heroPos.current.offsetWidth,
      });
      //setPos(heroPos.current.offsetHeight)
    }
  }, []);
  //const heroLeft= document.getElementById("1x1").getBoundingClientRect.left;

  const currentLevel = () =>
    roomData.slice(minLength, maxLength).map((y, iy) => (
      <tr>
        {y.slice(minWidth, maxWidth).map((x, ix) => (
          <Tile tileData={x} position={`${iy}x${ix}`} />
        ))}
      </tr>
    ));
  /*const [left, setLeft] = useState(
    document.getElementById("1x1").getBoundingClientRect.left
  );*/
  const placeHero = () => {
    console.log(`id: ${document.getElementById("1x1")}`);
    return (
      <div className="heroTile">
        <td>人</td>
      </div>
    );
  };

  const moveHero = () => {
    setMaxWidth(maxWidth + 1);
    setMinWidth(minWidth + 1);
  };

  return (
    <>
      <h3>level page</h3>
      <table ref={heroPos}>
        {currentLevel()}
        {placeHero()}
      </table>
      {xyz.x}:{xyz.y}&{xyz.width}
      <button onClick={moveHero}>右</button>
    </>
  );
};
