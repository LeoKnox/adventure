import { useState, useRef, useEffect } from "react";
import { roomData } from "./roomData.js";
import { heroData } from "./heroData.js";
import HeroTile from "./HeroTile.js";
import FighterSkills from "./FighterSkills.js";
import { tile } from "./Tile.js";

export default Level = () => {
  //document.getElementById("1x1").getBoundingClientRect.left
  const [xyz, setXyz] = useState(111);
  const [maxWidth, setMaxWidth] = useState(roomData[0].length - 1);
  const [maxLength, setMaxLength] = useState(roomData.length - 1);
  const [minWidth, setMinWidth] = useState(1);
  const [minLength, setMinLength] = useState(1);
  const heroPos = useRef();
  const [herohp, setHerohp] = useState();
  useEffect(() => {
    setHerohp(heroData.hp);
  }, [FighterSkills]);
  useEffect(() => {
    if (heroPos.current) {
      setXyz({
        x: heroPos.current.offsetLeft,
        y: heroPos.current.offsetTop,
        width: heroPos.current.offsetWidth,
        height: heroPos.current.offsetHeight,
      });
    }
  }, []);

  const currentLevel = () =>
    roomData.slice(minLength, maxLength).map((y, iy) => (
      <tr>
        {y.slice(minWidth, maxWidth).map((x, ix) => (
          <Tile tileData={x} position={`${iy}x${ix}`} heroPos={heroPos} />
        ))}
      </tr>
    ));

  const placeHero = () => {
    return (
      <div
        className="heroTile"
        style={{ left: 3 * (xyz.width + 2), top: 2 * (xyz.height + 2) }}
      >
        <HeroTile />
      </div>
    );
  };

  const moveHero = (e) => {
    if (e.target.id == "up") {
      setMaxLength(maxLength - 1);
      setMinLength(minLength - 1);
    }
    if (e.target.id == "right") {
      setMaxWidth(maxWidth + 1);
      setMinWidth(minWidth + 1);
    }
    if (e.target.id == "left") {
      setMaxWidth(maxWidth - 1);
      setMinWidth(minWidth - 1);
    }
    if (e.target.id == "down") {
      setMaxLength(maxLength + 1);
      setMinLength(minLength + 1);
    }
  };

  return (
    <>
      <h3>level page</h3>
      <table>
        {currentLevel()}
        {placeHero()}
      </table>
      <div>
        <h3>{heroData.class} Skills</h3>
        <p>
          Name:{heroData.name} HP: {herohp}
        </p>
        <FighterSkills />
      </div>
      <p>
        <button id="up" onClick={(e) => moveHero(e)}>
          上
        </button>
      </p>
      <p>
        <button id="left" onClick={(e) => moveHero(e)}>
          左
        </button>

        <button id="right" onClick={(e) => moveHero(e)}>
          右
        </button>
      </p>
      <p>
        <button id="down" onClick={(e) => moveHero(e)}>
          下
        </button>
      </p>
    </>
  );
};
