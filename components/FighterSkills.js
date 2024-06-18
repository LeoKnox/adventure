import { useState } from "react";
import { fighter, redClick } from "./heroData.js";

export default FighterSkills = () => {
  const test = "fighter";
  const [akaHero, setAka] = useState({ name: "red", hp: 55 });
  const redTest = () => {
    setAka({ name: akaHero.name, hp: akaHero.hp - 1 });
  };
  return (
    <div>
      <p>
        ## {akaHero.name} ## {akaHero.hp}
      </p>
      <button>Attack</button>
      <button>Defended</button>
      <button onClick={() => redTest()}>hit</button>
      {fighter(6)}
    </div>
  );
};
