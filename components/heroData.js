import { fighter, redClick } from "./heroData.js";

export default FighterSkills = () => {
  const test = "fighter";
  const redTest = () => {
    return "R" + "eD";
  };
  return (
    <div>
      <button>Attack</button>
      <button>Defended</button>
      <button onClick={redClick}>hit</button>
      {fighter(6)}
    </div>
  );
};
