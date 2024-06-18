import { useState } from "react";
import Strike from "./Strike.js";
import { fighter, redClick } from "./heroData.js";

export default FighterSkills = () => {
  const test = "fighter";
  const [akaHero, setAka] = useState({ name: "red", hp: 55 });
  const redTest = (damage = 0) => {
    setAka({ name: akaHero.name, hp: akaHero.hp - damage });
  };
  return (
    <div>
      <p>
        ## {akaHero.name} ## {akaHero.hp}
      </p>
      <button>Attack</button>
      <button>Defended</button>
      <Strike redTest={redTest} />
      <button onClick={() => redTest(8)}>hit</button>
      {fighter(6)}
    </div>
  );
};
