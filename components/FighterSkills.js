import { fighter } from "./heroData.js";

export default FighterSkills = () => {
  const redTest = () => {
    return "R" + "eD";
  };
  return (
    <div>
      <button>Attack</button>
      <button>Defend</button>
      {fighter({ param: redTest })}
    </div>
  );
};
