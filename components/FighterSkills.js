import { fighter, redClick } from "./heroData.js";

export default FighterSkills = () => {
  const test = "fighter";
  const redTest = () => {
    return "R" + "eD";
  };
  return (
    <div>
      <button>Attack</button>
      <button>Defend</button>
      <button onClick={redClick}>hit</button>
    </div>
  );
};
